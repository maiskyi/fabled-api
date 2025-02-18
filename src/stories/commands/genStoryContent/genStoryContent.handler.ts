import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { OnepAiClient } from '@services/openai';
import { get } from 'lodash';

import {
  AddStatusToStoryLogQuery,
  StoryStatusLog,
} from '../../queries/addStatusToStoryLog';
import { UpdateStoryQuery } from '../../queries/updateStory';
import { StoryContentGeneratedEvent } from '../../events/storyContentGenerated';

import { GenStoryContentCommand } from './genStoryContent.command';

@CommandHandler(GenStoryContentCommand)
export class GenStoryContentHandler
  implements ICommandHandler<GenStoryContentCommand>
{
  constructor(
    private openai: OnepAiClient,
    private queryBus: QueryBus,
    private eventBus: EventBus,
  ) {}

  async execute({ command }: GenStoryContentCommand) {
    const { id } = command;

    const { contentPrompt } = await this.queryBus.execute(
      new AddStatusToStoryLogQuery({
        id,
        statusLog: [StoryStatusLog.ContentInProgress],
      }),
    );

    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a professional writer of fairy tales for children',
        },
        {
          role: 'user',
          content: contentPrompt,
        },
        {
          role: 'user',
          content: `
              Please provide the response in JSON format with the following fields:
              {
                "title": "string" // title of the fairy tail,
                "content": "string" // content of the fairy tail
                "illustration": "string" // fairy tail illustration detailed description
              }
            `,
        },
      ],
    });

    const result = get(completion, ['choices', 0, 'message', 'content']);

    const json = result.replace(/```json|```/g, '').trim();

    const { title, content, illustration } = JSON.parse(json);

    await this.queryBus.execute(
      new UpdateStoryQuery({
        id,
        data: {
          title,
          content,
          imagePrompt: illustration,
        },
      }),
    );

    this.eventBus.publish(
      new StoryContentGeneratedEvent({
        id,
        title,
        content,
        imagePrompt: illustration,
      }),
    );
  }
}

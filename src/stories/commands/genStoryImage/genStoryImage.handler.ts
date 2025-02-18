import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { StabilityAiClient } from '@services/stabilityai';

import {
  UpdateStoryStatusQuery,
  StoryStatusLog,
} from '../../queries/updateStoryStatus';
import { StoryImageGeneratedEvent } from '../../events/storyImageGenerated';

import { GenStoryImageCommand } from './genStoryImage.command';

@CommandHandler(GenStoryImageCommand)
export class GenStoryImageHandler
  implements ICommandHandler<GenStoryImageCommand>
{
  constructor(
    private queryBus: QueryBus,
    private eventBus: EventBus,
    private client: StabilityAiClient,
  ) {}

  async execute({ command }: GenStoryImageCommand) {
    try {
      const { id, imagePrompt } = command;

      await this.queryBus.execute(
        new UpdateStoryStatusQuery({
          id,
          log: StoryStatusLog.ImageInProgress,
        }),
      );

      const {
        artifacts: [image],
      } = await this.client.sdxl.textToImage('stable-diffusion-xl-1024-v1-0', {
        text_prompts: [
          {
            text: imagePrompt,
          },
        ],
        samples: 1,
        steps: 30,
        width: 768,
        height: 1344,
      });

      this.eventBus.publish(
        new StoryImageGeneratedEvent({
          id,
          ...image,
        }),
      );
    } catch (e) {
      console.log(e);
    }
  }
}

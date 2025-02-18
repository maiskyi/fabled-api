import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { StabilityAiClient } from '@services/stabilityai';

import {
  AddStatusToStoryLogQuery,
  StoryStatusLog,
} from '../../queries/addStatusToStoryLog';
import { StoryImageGeneratedEvent } from '../../events/storyImageGenerated';

import { UploadStoryImageCommand } from './uploadStoryImage.command';

@CommandHandler(UploadStoryImageCommand)
export class UploadStoryImageHandler
  implements ICommandHandler<UploadStoryImageCommand>
{
  constructor(
    private queryBus: QueryBus,
    private eventBus: EventBus,
    private client: StabilityAiClient,
  ) {}

  async execute({ command }: UploadStoryImageCommand) {
    try {
      const { id } = command;
      console.log(id);
    } catch (e) {
      console.log(e);
    }
  }
}

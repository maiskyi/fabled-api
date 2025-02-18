import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { StabilityAiClient } from '@services/stabilityai';
import { CloudinaryClient } from '@services/cloudinary';

import {
  UpdateStoryStatusQuery,
  StoryStatusLog,
} from '../../queries/updateStoryStatus';
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
    private cloudinary: CloudinaryClient,
  ) {}

  async execute({ command }: UploadStoryImageCommand) {
    try {
      const { id, base64 } = command;

      console.log(command);
    } catch (e) {
      console.log(e);
    }
  }
}

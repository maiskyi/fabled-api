import { randomBytes } from 'crypto';

import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { CloudinaryClient } from '@services/cloudinary';
import { StoryStatusLog } from '@common/dto';

import { UpdateStoryQuery } from '../../queries/updateStory';
import { StoryImageUploadedEvent } from '../../events/storyImageUploaded';
import { StoryGenerationFailedEvent } from '../../events/storyGenerationFailed';

import { UploadStoryImageCommand } from './uploadStoryImage.command';

@CommandHandler(UploadStoryImageCommand)
export class UploadStoryImageHandler
  implements ICommandHandler<UploadStoryImageCommand>
{
  constructor(
    private queryBus: QueryBus,
    private eventBus: EventBus,
    private cloudinary: CloudinaryClient,
  ) {}

  async execute({ command }: UploadStoryImageCommand) {
    try {
      const { id, b64_json } = command;

      const _meta = await this.cloudinary.image.upload({
        source: `data:image/jpeg;base64,${b64_json}`,
        folder: 'stories',
      });

      await this.queryBus.execute(
        new UpdateStoryQuery({
          id,
          image: {
            id: randomBytes(16).toString('hex'),
            _meta,
          },
        }),
      );

      this.eventBus.publish(new StoryImageUploadedEvent({ id }));
    } catch (error) {
      const { id } = command;

      this.eventBus.publish(
        new StoryGenerationFailedEvent({
          id,
          error: StoryStatusLog.StoryImageUploadFailed,
          message: error?.message,
        }),
      );
    }
  }
}

import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { CloudinaryClient } from '@services/cloudinary';
import { StoryStatusType } from '@prisma/client';

import { UpdateStoryStatusQuery } from '../../queries/updateStoryStatus';

import { MarkStoryFailedCommand } from './markStoryFailed.command';

@CommandHandler(MarkStoryFailedCommand)
export class MarkStoryFailedHandler
  implements ICommandHandler<MarkStoryFailedCommand>
{
  constructor(
    private queryBus: QueryBus,
    private eventBus: EventBus,
    private cloudinary: CloudinaryClient,
  ) {}

  async execute({ command }: MarkStoryFailedCommand) {
    try {
      const { id, error } = command;

      this.queryBus.execute(
        new UpdateStoryStatusQuery({
          id,
          log: error,
          status: StoryStatusType.failed,
        }),
      );
    } catch (e) {
      console.log(e);
    }
  }
}

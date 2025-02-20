import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { CloudinaryClient } from '@services/cloudinary';
import { StoryStatusLog } from '@common/dto';
import { StoryStatusType } from '@prisma/client';

import { UpdateStoryStatusQuery } from '../../queries/updateStoryStatus';

import { MarkStoryCompletedCommand } from './markStoryCompleted.command';

@CommandHandler(MarkStoryCompletedCommand)
export class MarkStoryCompletedHandler
  implements ICommandHandler<MarkStoryCompletedCommand>
{
  constructor(
    private queryBus: QueryBus,
    private eventBus: EventBus,
    private cloudinary: CloudinaryClient,
  ) {}

  async execute({ command }: MarkStoryCompletedCommand) {
    try {
      const { id } = command;

      this.queryBus.execute(
        new UpdateStoryStatusQuery({
          id,
          log: StoryStatusLog.Success,
          status: StoryStatusType.success,
        }),
      );
    } catch (e) {
      console.log(e);
    }
  }
}

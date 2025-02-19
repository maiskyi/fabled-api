import { StoryStatusLog } from '@common/dto';
import { Command } from '@nestjs/cqrs';

interface MarkStoryFailedCommandType {
  id: string;
  error?: StoryStatusLog;
}

export class MarkStoryFailedCommand extends Command<void> {
  public constructor(public readonly command: MarkStoryFailedCommandType) {
    super();
  }
}

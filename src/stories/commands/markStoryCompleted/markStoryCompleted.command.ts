import { Command } from '@nestjs/cqrs';

interface MarkStoryCompletedCommandType {
  id: string;
}

export class MarkStoryCompletedCommand extends Command<void> {
  public constructor(public readonly command: MarkStoryCompletedCommandType) {
    super();
  }
}

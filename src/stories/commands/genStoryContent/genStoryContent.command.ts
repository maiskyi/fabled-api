import { Command } from '@nestjs/cqrs';

interface GenStoryContentCommandType {
  id: string;
}

export class GenStoryContentCommand extends Command<void> {
  public constructor(public readonly command: GenStoryContentCommandType) {
    super();
  }
}

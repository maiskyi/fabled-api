import { Command } from '@nestjs/cqrs';

interface GenStoryContentCommandParams {
  id: string;
}

export class GenStoryContentCommand extends Command<void> {
  public constructor(public readonly story: GenStoryContentCommandParams) {
    super();
  }
}

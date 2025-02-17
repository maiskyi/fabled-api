import { Command } from '@nestjs/cqrs';

interface GenStoryContentCommandParams {
  id: string;
}

export class GenStoryContentCommand extends Command<boolean> {
  public constructor(public readonly story: GenStoryContentCommandParams) {
    super();
  }
}

import { Command } from '@nestjs/cqrs';

interface GenStoryCommandParams {
  id: string;
}

export class GenStoryCommand extends Command<boolean> {
  public constructor(public readonly story: GenStoryCommandParams) {
    super();
  }
}

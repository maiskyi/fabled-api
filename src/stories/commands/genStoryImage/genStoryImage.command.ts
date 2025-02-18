import { Command } from '@nestjs/cqrs';

interface GenStoryImageCommandType {
  id: string;
  imagePrompt: string;
}

export class GenStoryImageCommand extends Command<void> {
  public constructor(public readonly command: GenStoryImageCommandType) {
    super();
  }
}

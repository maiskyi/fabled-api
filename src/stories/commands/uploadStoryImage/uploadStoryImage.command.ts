import { Command } from '@nestjs/cqrs';
import { Image } from 'openai/resources';

interface UploadStoryImageCommandType extends Image {
  id: string;
}

export class UploadStoryImageCommand extends Command<void> {
  public constructor(public readonly command: UploadStoryImageCommandType) {
    super();
  }
}

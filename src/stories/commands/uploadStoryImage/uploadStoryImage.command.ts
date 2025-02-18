import { Command } from '@nestjs/cqrs';
import { DTO } from '@services/stabilityai';

interface UploadStoryImageCommandType extends DTO.Image {
  id: string;
}

export class UploadStoryImageCommand extends Command<void> {
  public constructor(public readonly command: UploadStoryImageCommandType) {
    super();
  }
}

import { ApiProperty } from '@nestjs/swagger';

export class StoryImage {
  @ApiProperty()
  publicId: string;
}

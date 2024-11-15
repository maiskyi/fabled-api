import { ApiProperty } from '@nestjs/swagger';

import { StoryImage } from './storyImage.dto';

export class Story {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  readTime: number;

  @ApiProperty({
    type: StoryImage,
  })
  image: StoryImage;
}

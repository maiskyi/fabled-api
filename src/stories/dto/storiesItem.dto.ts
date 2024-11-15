import { ApiProperty } from '@nestjs/swagger';

import { StoryImage } from './storyImage.dto';

export class StoriesItem {
  @ApiProperty()
  title: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  readTime: number;

  @ApiProperty({
    type: StoryImage,
  })
  image: StoryImage;
}

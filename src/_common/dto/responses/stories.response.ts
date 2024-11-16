import { ApiProperty } from '@nestjs/swagger';

import { StoryItem } from './storyItem.response';
import { Paginated } from './paginated.response';

export class Stories extends Paginated<StoryItem> {
  @ApiProperty({
    type: [StoryItem],
  })
  public readonly data: StoryItem[];
}

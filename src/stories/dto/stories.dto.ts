import { ApiProperty } from '@nestjs/swagger';

import { StoriesItem } from './storiesItem.dto';

export class Stories {
  @ApiProperty()
  total: number;

  @ApiProperty({
    type: [StoriesItem],
  })
  data: StoriesItem[];
}

import { ApiProperty } from '@nestjs/swagger';

import { StoriesItem } from './StoriesItem.dto';

export class Stories {
  @ApiProperty()
  total: number;

  @ApiProperty({
    type: [StoriesItem],
  })
  data: StoriesItem[];
}

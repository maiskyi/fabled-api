import { ApiProperty } from '@nestjs/swagger';

class StoriesItem {
  @ApiProperty()
  title: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  readTime: number;
}

export class Stories {
  @ApiProperty()
  total: number;

  @ApiProperty({
    type: [StoriesItem],
  })
  data: StoriesItem[];
}

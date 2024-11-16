import { ApiProperty } from '@nestjs/swagger';

export class StoryItem {
  @ApiProperty({
    type: String,
  })
  public readonly title: string;

  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: Number,
  })
  public readonly readTime: number;

  @ApiProperty({
    type: String,
  })
  public readonly image: string;
}

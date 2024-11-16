import { ApiProperty } from '@nestjs/swagger';

export class Story {
  @ApiProperty({
    type: String,
  })
  public readonly title: string;

  @ApiProperty({
    type: String,
  })
  public readonly content: string;

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

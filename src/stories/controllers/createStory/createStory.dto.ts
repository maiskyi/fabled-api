import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStoryRequest {
  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  public readonly characterId?: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  public readonly moralLessonId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  public readonly placeOfEventId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  public readonly promptId: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  public readonly readTime: number;
}

export class CreateStoryResponse {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;
}

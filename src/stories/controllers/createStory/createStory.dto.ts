import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { StoryChildGenderType } from '@prisma/client';
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

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsOptional()
  public readonly childName: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsOptional()
  @IsInt()
  public readonly childAge: number;

  @ApiProperty({
    enumName: 'ChildGender',
    enum: StoryChildGenderType,
    required: false,
  })
  @IsOptional()
  @IsEnum(StoryChildGenderType)
  public readonly childGender: StoryChildGenderType;
}

export class CreateStoryResponse {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;
}

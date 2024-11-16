import {
  IsOptional,
  IsInt,
  Min,
  IsEnum,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { StoryStatusType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ImageTransformationQuery } from '@common/dto';

export class GetStoriesQuery {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt({ message: 'Validation failed (numeric string is expected)' })
  @Min(0)
  public readonly skip?: number;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt({ message: 'Validation failed (numeric string is expected)' })
  @Min(0)
  public readonly take?: number;

  @ApiProperty({
    required: false,
    enum: StoryStatusType,
  })
  @IsOptional()
  @IsEnum(StoryStatusType)
  public readonly status?: StoryStatusType;

  @ApiProperty({
    required: false,
    type: ImageTransformationQuery,
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => ImageTransformationQuery)
  public readonly image: ImageTransformationQuery;
}

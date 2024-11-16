import { IsOptional, IsEnum, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { StoryStatusType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ImageTransformationQuery } from '@common/dto';
import { PaginatedQuery } from '@common/dto';

export class GetStoriesQuery extends PaginatedQuery {
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

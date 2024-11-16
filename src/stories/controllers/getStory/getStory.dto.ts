import { ImageTransformationQuery } from '@common/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsObject, IsOptional, ValidateNested } from 'class-validator';

export class GetStoryQuery {
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

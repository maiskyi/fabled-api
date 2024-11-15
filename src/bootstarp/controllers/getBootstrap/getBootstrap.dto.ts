import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsObject, IsOptional, ValidateNested } from 'class-validator';
import { ImageTransformationQuery } from '@common/dto';

export class BootstrapQuery {
  @ApiProperty({
    required: false,
    type: ImageTransformationQuery,
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => ImageTransformationQuery)
  image: ImageTransformationQuery;
}

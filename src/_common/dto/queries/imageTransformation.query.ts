import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';
import {
  ImageTransformation,
  ImageTransformationCrop,
} from '@services/cloudinary';

export class ImageTransformationQuery implements ImageTransformation {
  @ApiProperty({
    required: false,
    minimum: 1,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  public readonly width?: number;

  @ApiProperty({
    required: false,
    minimum: 1,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10))
  public readonly height?: number;

  @ApiProperty({
    required: false,
    enum: ImageTransformationCrop,
  })
  @IsOptional()
  @IsEnum(ImageTransformationCrop)
  public readonly crop?: ImageTransformationCrop;
}

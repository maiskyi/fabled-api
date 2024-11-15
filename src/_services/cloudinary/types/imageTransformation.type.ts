import { ImageTransformationCrop } from './imageTransformationCrop.type';

export interface ImageTransformation {
  readonly width?: number;
  readonly height?: number;
  readonly crop?: ImageTransformationCrop;
}

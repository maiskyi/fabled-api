import { ImageTransformationCrop } from './imageTransformationCrop.type';
import { ImageTransformationAspectRation } from './imageTransformationAspectRation.type';

export interface ImageTransformation {
  readonly width?: number;
  readonly height?: number;
  readonly crop?: ImageTransformationCrop;
  readonly aspectRatio?: ImageTransformationAspectRation;
}

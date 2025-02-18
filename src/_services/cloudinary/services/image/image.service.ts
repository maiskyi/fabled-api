import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';

import { ImageTransformation } from '../../types';

@Injectable()
export class CloudinaryImageService {
  public url(
    publicId: string,
    { width, height, crop, aspectRatio }: ImageTransformation = {},
  ): string {
    return v2.url(publicId, {
      width,
      height,
      crop,
      aspect_ratio: aspectRatio,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';

import { ImageTransformation } from '../../types';

@Injectable()
export class CloudinaryService {
  public image(
    publicId: string,
    { width, height, crop }: ImageTransformation = {},
  ): string {
    return v2.url(publicId, {
      width,
      height,
      crop,
    });
  }
}

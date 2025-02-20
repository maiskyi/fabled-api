import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';

import { ImageTransformation } from '../../types';
import { ConfigService } from '../config';

import { UploadParams } from './image.types';

@Injectable()
export class CloudinaryImageService {
  public constructor(private config: ConfigService) {}

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

  public async upload({ source, folder }: UploadParams) {
    return v2.uploader.upload(source, {
      resource_type: 'auto',
      folder: `${this.config.rootFolder}/${folder}`,
    });
  }
}

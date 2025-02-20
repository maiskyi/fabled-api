import { Injectable } from '@nestjs/common';

import { CloudinaryImageService } from '../image';

@Injectable()
export class CloudinaryClient {
  public constructor(public image: CloudinaryImageService) {}
}

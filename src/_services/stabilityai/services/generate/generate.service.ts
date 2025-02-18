import { Injectable } from '@nestjs/common';

import { Generate } from '../../__generated__/Generate';
import { HttpClientService } from '../http-client';

@Injectable()
export class GenerateService extends Generate {
  public constructor(client: HttpClientService) {
    super(client);
  }
}

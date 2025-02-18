import { Injectable } from '@nestjs/common';

import { Sdxl10Sd16 } from '../../__generated__/Sdxl10Sd16';
import { HttpClientService } from '../http-client';

@Injectable()
export class SdxlService extends Sdxl10Sd16 {
  public constructor(client: HttpClientService) {
    super(client);
  }
}

import { Injectable } from '@nestjs/common';

import { Entitlement } from '../../__generated__/Entitlement';
import { HttpClientService } from '../http-client';

@Injectable()
export class EntitlementService extends Entitlement {
  public constructor(client: HttpClientService) {
    super(client);
  }
}

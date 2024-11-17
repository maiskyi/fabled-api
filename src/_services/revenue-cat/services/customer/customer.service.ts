import { Injectable } from '@nestjs/common';

import { Customer } from '../../__generated__/Customer';
import { HttpClientService } from '../http-client';

@Injectable()
export class CustomerService extends Customer {
  public constructor(client: HttpClientService) {
    super(client);
  }
}

import { Injectable } from '@nestjs/common';

import { HttpClient } from '../../__generated__/http-client';
import { ConfigService } from '../config';

@Injectable()
export class HttpClientService extends HttpClient {
  public constructor(config: ConfigService) {
    super({
      baseURL: config.baseURL,
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        Accept: 'application/json',
      },
    });
  }
}

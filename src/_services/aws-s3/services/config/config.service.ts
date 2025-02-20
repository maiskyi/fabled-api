import { Injectable } from '@nestjs/common';

import { ConfigServiceConfig } from './config.types';

@Injectable()
export class ConfigService {
  public constructor(private config: ConfigServiceConfig) {}

  public get bucketName() {
    return this.config.bucketName;
  }
}

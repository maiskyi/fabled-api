import { Injectable } from '@nestjs/common';

import { ConfigServiceConfig } from './config.type';

@Injectable()
export class ConfigService {
  public constructor(private config: ConfigServiceConfig) {}

  public get rootFolder() {
    return this.config.rootFolder;
  }
}

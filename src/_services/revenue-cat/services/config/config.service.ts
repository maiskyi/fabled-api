import { Injectable } from '@nestjs/common';

import { RevenueCatConfig } from '../../revenue-cat.types';

@Injectable()
export class ConfigService implements RevenueCatConfig {
  public constructor(private config: RevenueCatConfig) {}

  public get baseURL() {
    return this.config.baseURL;
  }

  public get apiKey() {
    return this.config.apiKey;
  }

  public get projectId() {
    return this.config.projectId;
  }

  public get environment() {
    return this.config.environment;
  }
}

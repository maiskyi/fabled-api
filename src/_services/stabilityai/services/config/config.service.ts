import { Injectable } from '@nestjs/common';

import { StabilityAiConfig } from '../../stabilityai.types';

@Injectable()
export class ConfigService {
  public constructor(private config: StabilityAiConfig) {}

  public get baseURL() {
    return this.config.baseURL;
  }

  public get apiKey() {
    return this.config.apiKey;
  }
}

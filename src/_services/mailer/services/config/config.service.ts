import { Injectable } from '@nestjs/common';

import { ConfigConfig } from './config.types';

@Injectable()
export class ConfigService {
  public constructor(private _config: ConfigConfig) {}

  public get from() {
    return this._config.from;
  }

  public get to() {
    return this._config.to;
  }
}

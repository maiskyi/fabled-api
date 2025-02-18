import { DynamicModule, Module } from '@nestjs/common';

import { StabilityAiConfig } from './stabilityai.types';
import { ConfigService } from './services/config';
import { GenerateService } from './services/generate';
import { HttpClientService } from './services/http-client';
import { StabilityAiClient } from './services/client';
import { SdxlService } from './services/sdxl';

@Module({
  providers: [
    GenerateService,
    HttpClientService,
    StabilityAiClient,
    SdxlService,
  ],
  exports: [StabilityAiClient],
})
export class StabilityAiModule {
  public static forRoot(config: StabilityAiConfig): DynamicModule {
    return {
      module: StabilityAiModule,
      global: true,
      providers: [
        {
          provide: ConfigService,
          useValue: new ConfigService(config),
        },
      ],
    };
  }
}

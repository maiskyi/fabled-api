import { DynamicModule, Module } from '@nestjs/common';

import { OnepAiClient } from './services/client';
import { OnepAiConfig } from './open-ai.types';

@Module({
  providers: [],
  exports: [],
})
export class OnepAiModule {
  public static forRoot({ apiKey }: OnepAiConfig): DynamicModule {
    return {
      module: OnepAiModule,
      global: true,
      providers: [
        {
          provide: OnepAiClient,
          useValue: new OnepAiClient({
            apiKey,
          }),
        },
      ],
    };
  }
}

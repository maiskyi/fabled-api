import { DynamicModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { RevenueCatConfig } from './revenue-cat.types';

@Module({})
export class RevenueCatModule {
  public static forRoot({ apiKey, baseURL }: RevenueCatConfig): DynamicModule {
    return {
      module: RevenueCatModule,
      global: true,
      imports: [
        HttpModule.register({
          baseURL,
          timeout: 5000,
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }),
      ],
    };
  }
}

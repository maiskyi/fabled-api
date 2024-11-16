import { DynamicModule, Module } from '@nestjs/common';

import { RevenueCatConfig } from './revenue-cat.types';
import { ConfigService } from './services/config';
import { CustomerService } from './services/customer';
import { HttpClientService } from './services/http-client';

@Module({
  providers: [CustomerService, HttpClientService],
})
export class RevenueCatModule {
  public static forRoot(config: RevenueCatConfig): DynamicModule {
    return {
      module: RevenueCatModule,
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

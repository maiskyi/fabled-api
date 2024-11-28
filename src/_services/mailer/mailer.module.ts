import { DynamicModule, Module } from '@nestjs/common';

import { MailerConfig } from './mailer.types';
import { TransportService } from './services/transport';
import { MailerService } from './services/mailer';
import { ConfigService } from './services/config';

@Module({})
export class MailerModule {
  static forRoot({ email, password, from, to }: MailerConfig): DynamicModule {
    return {
      module: MailerModule,
      global: true,
      providers: [
        MailerService,
        {
          provide: TransportService,
          useValue: new TransportService({
            email,
            password,
          }),
        },
        {
          provide: ConfigService,
          useValue: new ConfigService({
            from,
            to,
          }),
        },
      ],
      exports: [MailerService],
    };
  }
}

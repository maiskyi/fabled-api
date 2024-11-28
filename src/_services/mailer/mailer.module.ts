import { DynamicModule, Module } from '@nestjs/common';

import { MailerConfig } from './mailer.types';
import { TransportService } from './services/transport';
import { MailerService } from './services/mailer';

@Module({})
export class MailerModule {
  static forRoot({ email, password }: MailerConfig): DynamicModule {
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
      ],
      exports: [MailerService],
    };
  }
}

import { DynamicModule, Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

import { TelegramConfig } from './telegram.types';
import { FabledChanelService } from './services/fabled-chanel';
import { ConfigService } from './services/config';
import { FABLED_BOT_NAME } from './telegram.const';

@Module({
  providers: [FabledChanelService],
  exports: [FabledChanelService],
})
export class TelegramModule {
  public static forRoot({ token, chanelId }: TelegramConfig): DynamicModule {
    return {
      imports: [
        TelegrafModule.forRoot({
          token,
          botName: FABLED_BOT_NAME,
        }),
      ],
      module: TelegramModule,
      global: true,
      providers: [
        {
          provide: ConfigService,
          useValue: new ConfigService({
            fabledChanelId: chanelId,
          }),
        },
      ],
    };
  }
}

import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { Message } from 'telegraf/typings/core/types/typegram';

import { ConfigService } from '../config';
import { FABLED_BOT_NAME } from '../../telegram.const';

import { SendMessageParams } from './fabled-chanel.types';

@Injectable()
export class FabledChanelService {
  public constructor(
    private config: ConfigService,
    @InjectBot(FABLED_BOT_NAME) private bot: Telegraf,
  ) {}

  public sendMessage({
    message,
  }: SendMessageParams): Promise<Message.TextMessage> {
    return this.bot.telegram.sendMessage(this.config.fabledChanelId, message, {
      parse_mode: 'HTML',
    });
  }
}

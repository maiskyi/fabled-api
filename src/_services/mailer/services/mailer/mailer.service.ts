import { Injectable } from '@nestjs/common';
import { SentMessageInfo } from 'nodemailer';

import { TransportService } from '../transport';
import { ConfigService } from '../config';

import { SendMailParams } from './mailer.types';

@Injectable()
export class MailerService {
  public constructor(
    private transporter: TransportService,
    private config: ConfigService,
  ) {}

  public sendMail = ({
    subject,
    text,
  }: SendMailParams): Promise<SentMessageInfo> => {
    return this.transporter.transporter.sendMail({
      subject,
      text,
      from: this.config.from,
      to: this.config.to,
    });
  };
}

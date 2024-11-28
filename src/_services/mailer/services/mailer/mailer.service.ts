import { Injectable } from '@nestjs/common';
import { SendMailOptions, SentMessageInfo } from 'nodemailer';

import { TransportService } from '../transport';

@Injectable()
export class MailerService {
  public constructor(private transporter: TransportService) {}

  public sendMail = (options: SendMailOptions): Promise<SentMessageInfo> => {
    return this.transporter.transporter.sendMail({
      ...options,
      to: this.transporter.recipient,
    });
  };
}

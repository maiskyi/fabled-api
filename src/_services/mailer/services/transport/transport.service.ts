import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

import { MailerConfig } from './../../mailer.types';

@Injectable()
export class TransportService {
  public transporter: Transporter;
  public recipient: string;

  public constructor({ email, password }: MailerConfig) {
    this.recipient = email;

    this.transporter = createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: password,
      },
    });
  }
}

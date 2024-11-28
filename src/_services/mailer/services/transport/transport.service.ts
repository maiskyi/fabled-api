import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

import { TransportConfig } from './transport.types';

@Injectable()
export class TransportService {
  public transporter: Transporter;

  public constructor({ email, password }: TransportConfig) {
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

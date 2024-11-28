import { PrismaService } from '@core/prisma';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@services/mailer';

import { CreateInquiryParams, SendMailParams } from './createInquiry.types';

@Injectable()
export class CreateInquiryService {
  public constructor(
    private prisma: PrismaService,
    private mailer: MailerService,
  ) {}

  public async createInquiry(data: CreateInquiryParams) {
    const { id, email, message, subject } = await this.prisma.inquiry.create({
      data,
    });

    return { id, email, message, subject };
  }

  public async sendMail({ email, subject, message }: SendMailParams) {
    const {} = await this.mailer.sendMail({
      subject: `[Fabled][ContactUs] ${subject}`,
      text: `
        From: ${email}
      
        Message: ${message}
      `,
    });
  }
}

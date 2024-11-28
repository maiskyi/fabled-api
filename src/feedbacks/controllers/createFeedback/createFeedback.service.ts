import { PrismaService } from '@core/prisma';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@services/mailer';

import { CreateFeedbackParams, SendEmailParams } from './createFeedback.types';

@Injectable()
export class CreateFeedbackService {
  public constructor(
    private prisma: PrismaService,
    private mailer: MailerService,
  ) {}

  public async createFeedback(data: CreateFeedbackParams) {
    const { id, email } = await this.prisma.feedback.create({
      data,
    });

    return { id, email };
  }

  public sendEmail({ email, comment, rating }: SendEmailParams) {
    return this.mailer.sendMail({
      subject: `[Fabled][Feedback] ${email}`,
      text: `
        From: ${email}

        Rating: ${rating}
      
        Message: ${comment}
      `,
    });
  }
}

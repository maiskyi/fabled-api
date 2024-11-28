import { PrismaService } from '@core/prisma';
import { Injectable } from '@nestjs/common';

import { CreateInquiryParams } from './createInquiry.types';

@Injectable()
export class CreateInquiryService {
  public constructor(private prisma: PrismaService) {}

  public async createInquiry({ email, message, subject }: CreateInquiryParams) {
    const { id } = await this.prisma.inquiry.create({
      data: {
        email,
        message,
        subject,
      },
    });

    return { id };
  }
}

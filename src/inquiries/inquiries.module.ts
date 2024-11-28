import { Module } from '@nestjs/common';

import {
  CreateInquiryController,
  CreateInquiryService,
} from './controllers/createInquiry';

@Module({
  controllers: [CreateInquiryController],
  providers: [CreateInquiryService],
})
export class InquiriesModule {}

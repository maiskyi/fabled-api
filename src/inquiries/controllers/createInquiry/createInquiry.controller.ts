import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateInquiryService } from './createInquiry.service';
import {
  CreateInquiryRequest,
  CreateInquiryResponse,
} from './createInquiry.dto';

@ApiTags('Inquiries')
@Controller('inquiries')
export class CreateInquiryController {
  public constructor(private service: CreateInquiryService) {}

  @Post()
  @ApiOperation({
    operationId: 'createInquiry',
    summary: 'Create inquiry',
  })
  public async createInquiry(
    @Body() body: CreateInquiryRequest,
  ): Promise<CreateInquiryResponse> {
    const { id, ...rest } = await this.service.createInquiry(body);

    this.service.sendMail(rest);

    return { id };
  }
}

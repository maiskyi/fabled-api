import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

import { CreateInquiryParams } from './createInquiry.types';

export class CreateInquiryRequest implements CreateInquiryParams {
  @ApiProperty({
    type: String,
  })
  @IsEmail()
  public readonly email: string;

  @ApiProperty({
    type: String,
  })
  public readonly message: string;

  @ApiProperty({
    type: String,
  })
  public readonly subject: string;
}

export class CreateInquiryResponse {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;
}

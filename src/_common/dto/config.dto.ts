import { ApiProperty } from '@nestjs/swagger';

export class Config {
  @ApiProperty()
  privacyPolicyUrl: string;

  @ApiProperty()
  termsAndConditionsUrl: string;
}

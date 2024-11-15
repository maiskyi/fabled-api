import { ApiProperty } from '@nestjs/swagger';

export class PromptItem {
  @ApiProperty()
  message: string;

  @ApiProperty()
  id: string;
}

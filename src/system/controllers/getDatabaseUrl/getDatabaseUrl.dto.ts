import { ApiProperty } from '@nestjs/swagger';

export class GetDatabaseUrlResponse {
  @ApiProperty({
    type: String,
  })
  public readonly url: string;
}

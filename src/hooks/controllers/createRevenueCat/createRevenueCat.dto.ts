import { ApiProperty } from '@nestjs/swagger';

export class CreateRevenueCatRequestEvent {
  @ApiProperty({
    type: String,
  })
  public readonly country_code: string;

  @ApiProperty({
    type: String,
  })
  public readonly store: string;

  @ApiProperty({
    type: String,
  })
  public readonly type: string;

  @ApiProperty({
    type: String,
  })
  public readonly product_id: string;
}

export class CreateRevenueCatRequest {
  @ApiProperty({
    type: CreateRevenueCatRequestEvent,
  })
  public readonly event: CreateRevenueCatRequestEvent;
}

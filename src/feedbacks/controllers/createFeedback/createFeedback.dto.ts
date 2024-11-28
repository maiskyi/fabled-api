import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedbackRequest {
  @ApiProperty({
    type: String,
  })
  public readonly comment: string;

  @ApiProperty({
    type: Number,
  })
  public readonly rating: number;
}

export class CreateFeedbackResponse {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;
}

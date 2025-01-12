import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateFeedbackRequest {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  public readonly comment: string;

  @ApiProperty({
    type: Number,
    minimum: 1,
    maximum: 5,
  })
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  public readonly rating: number;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsEmail()
  public readonly email: string;
}

export class CreateFeedbackResponse {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  public readonly id: string;
}

import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard, User, UserInfo } from '@services/firebase';
import { HttpExceptionResponse } from '@common/dto';

import {
  CreateFeedbackRequest,
  CreateFeedbackResponse,
} from './createFeedback.dto';
import { CreateFeedbackService } from './createFeedback.service';

@ApiTags('Feedbacks')
@Controller('feedbacks')
export class CreateFeedbackController {
  public constructor(private service: CreateFeedbackService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    operationId: 'createFeedback',
    summary: 'Create feedback',
  })
  @ApiOkResponse({
    type: CreateFeedbackResponse,
  })
  @ApiUnauthorizedResponse({
    type: HttpExceptionResponse,
  })
  @ApiInternalServerErrorResponse({
    type: HttpExceptionResponse,
  })
  public async createFeedback(
    @Body() body: CreateFeedbackRequest,
    @User() user: UserInfo,
  ): Promise<CreateFeedbackResponse> {
    const { email: firebaseEmail, uid: firebaseUserId } = user;
    const { rating, comment, email = firebaseEmail } = body;

    const { id } = await this.service.createFeedback({
      email,
      firebaseUserId,
      rating,
      comment,
    });

    this.service.sendEmail({ email, comment, rating });

    return { id };
  }
}

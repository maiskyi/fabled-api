import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { AuthGuard, User, UserInfo } from '@services/firebase';
import { OrGuard } from '@common/guards';
import { HasActiveSubscription } from '@services/revenue-cat';
import { HttpExceptionResponse } from '@common/dto';
import { StoryService } from '@services/keystone';

import { CreateStoryGuard } from './createStory.guard';
import { CreateStoryRequest, CreateStoryResponse } from './createStory.dto';

@ApiTags('Stories')
@Controller('stories')
export class CreateStoryController {
  public constructor(private story: StoryService) {}

  @Post()
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create user story',
    operationId: 'createStory',
  })
  @ApiForbiddenResponse({
    type: HttpExceptionResponse,
  })
  @ApiUnauthorizedResponse({
    type: HttpExceptionResponse,
  })
  @ApiBadRequestResponse({
    type: HttpExceptionResponse,
  })
  @ApiInternalServerErrorResponse({
    type: HttpExceptionResponse,
  })
  @ApiCreatedResponse({
    type: CreateStoryResponse,
  })
  @UseGuards(
    AuthGuard,
    OrGuard([HasActiveSubscription, CreateStoryGuard], {
      throwOnFirstError: true,
    }),
  )
  public async createStory(
    @User() user: UserInfo,
    @Body() body: CreateStoryRequest,
  ): Promise<CreateStoryResponse> {
    const { uid: firebaseUserId } = user;

    const { characterId, moralLessonId, placeOfEventId, promptId, readTime } =
      body;

    const {
      data: {
        createStory: { id },
      },
    } = await this.story.create({
      data: {
        character: {
          connect: {
            id: characterId,
          },
        },
        moralLesson: {
          connect: {
            id: moralLessonId,
          },
        },
        placeOfEvent: {
          connect: {
            id: placeOfEventId,
          },
        },
        prompt: {
          connect: {
            id: promptId,
          },
        },
        readTime,
        firebaseUserId,
      },
    });

    return { id };
  }
}

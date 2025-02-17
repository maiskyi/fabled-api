import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
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
import { DeviceId } from '@services/keystone';
import { CommandBus } from '@nestjs/cqrs';

import { GenStoryCommand } from '../../commands/gen-story';

import { CreateStoryGuard } from './createStory.guard';
import { CreateStoryRequest, CreateStoryResponse } from './createStory.dto';
import { CreateStoryService } from './createStory.service';
import { CreateStoryInterceptor } from './createStory.interceptor';

@ApiTags('Stories')
@Controller('stories')
@UseInterceptors(CreateStoryInterceptor)
export class CreateStoryController {
  public constructor(
    private story: StoryService,
    private service: CreateStoryService,
    private commandBus: CommandBus,
  ) {}

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
    @DeviceId() deviceId: string,
    @User() user: UserInfo,
    @Body() body: CreateStoryRequest,
  ): Promise<CreateStoryResponse> {
    const { uid: firebaseUserId } = user;

    const { story } = await this.service.getExistingStory({
      deviceId,
      firebaseUserId,
      ...body,
    });

    if (story) {
      const { id } = await this.service.copyExistingStory({
        firebaseUserId,
        story,
        deviceId,
      });

      return { id };
    }

    const {
      data: {
        createStory: { id },
      },
    } = await this.story.create({
      firebaseUserId,
      deviceId,
      ...body,
    });

    this.commandBus.execute(new GenStoryCommand({ id: '1' }));

    return { id };
  }
}

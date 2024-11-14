import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard, User, UserInfo } from '@services/firebase';
import { StoryStatusType } from '@prisma/client';

import { GetStoriesService } from './getStories.service';
import { Stories } from './getStories.dto';

@ApiTags('Stories')
@Controller('stories')
export class GetStoriesController {
  public constructor(private stories: GetStoriesService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiQuery({
    name: 'skip',
    required: false,
    type: Number,
  })
  @ApiQuery({
    name: 'take',
    required: false,
    type: Number,
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: StoryStatusType,
  })
  @ApiOperation({
    summary: 'Get user stories',
    operationId: 'getStories',
  })
  @ApiOkResponse({
    type: Stories,
  })
  public async getStories(
    @User() user: UserInfo,
    @Query('skip') skip: number = 0,
    @Query('take') take: number = 25,
    @Query('status') status: StoryStatusType = StoryStatusType.success,
  ): Promise<Stories> {
    const { uid: firebaseUserId } = user;

    return this.stories.getStories({
      status,
      skip,
      take,
      firebaseUserId,
    });
  }
}

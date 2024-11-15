import { get } from 'lodash';

import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard, User, UserInfo } from '@services/firebase';
import { StoryStatusType } from '@prisma/client';

import { Stories } from '../../dto';

import { GetStoriesService } from './getStories.service';

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
    @Query('skip', ParseIntPipe) skip: number = 0,
    @Query('take', ParseIntPipe) take: number = 25,
    @Query('status') status: StoryStatusType = StoryStatusType.success,
  ): Promise<Stories> {
    const { uid: firebaseUserId } = user;

    const { data: records, total } = await this.stories.getStories({
      status,
      skip,
      take,
      firebaseUserId,
    });

    const data = records.map(({ image, ...rest }) => ({
      ...rest,
      image: { publicId: get(image, ['_meta', 'public_id']) },
    }));

    return { data, total };
  }
}

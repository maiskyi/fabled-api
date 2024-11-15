import { get } from 'lodash';
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

import { Stories } from '../../dto';

import { GetStoriesService } from './getStories.service';
import { QueryParams } from './getStories.dto';

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
    @Query() query: QueryParams,
  ): Promise<Stories> {
    const { skip = 0, take = 25, status = StoryStatusType.success } = query;
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

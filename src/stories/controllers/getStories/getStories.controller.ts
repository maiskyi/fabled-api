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
import { ImageTransformationQuery, Stories } from '@common/dto';
import { CloudinaryService } from '@services/cloudinary';

import { GetStoriesService } from './getStories.service';
import { GetStoriesQuery } from './getStories.dto';

@ApiTags('Stories')
@Controller('stories')
export class GetStoriesController {
  public constructor(
    private stories: GetStoriesService,
    private cloudinary: CloudinaryService,
  ) {}

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
  @ApiQuery({
    name: 'image',
    required: false,
    type: ImageTransformationQuery,
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
    @Query() query: GetStoriesQuery,
  ): Promise<Stories> {
    const {
      skip = 0,
      take = 25,
      status = StoryStatusType.success,
      image: transformation,
    } = query;

    const { uid: firebaseUserId } = user;

    const { data: records, total } = await this.stories.getStories({
      status,
      skip,
      take,
      firebaseUserId,
    });

    const data = records.map(({ image, ...rest }) => ({
      ...rest,
      image: this.cloudinary.image(
        get(image, ['_meta', 'public_id']),
        transformation,
      ),
    }));

    return { data, total };
  }
}

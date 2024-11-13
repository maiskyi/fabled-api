import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard, User, UserInfo } from '@services/firebase';
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
    default: 0,
  })
  @ApiQuery({
    name: 'take',
    required: false,
    type: Number,
    default: 25,
  })
  public async getStories(
    @User() user: UserInfo,
    @Query('skip') skip: number = 0,
    @Query('take') take: number = 25,
  ) {
    const { uid: firebaseUserId } = user;

    return this.stories.getStories({
      skip,
      take,
      firebaseUserId,
    });
  }
}

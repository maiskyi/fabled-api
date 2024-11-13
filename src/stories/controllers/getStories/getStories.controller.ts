import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard, User, UserInfo } from '@services/firebase';
import { GetStoriesService } from './getStories.service';

@ApiTags('Stories')
@Controller('stories')
export class GetStoriesController {
  public constructor(private stories: GetStoriesService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  public getStories(@User() user: UserInfo) {
    const { uid: firebaseUserId } = user;

    return this.stories.getStories({ firebaseUserId });
  }
}

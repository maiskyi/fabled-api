import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@services/firebase';
import { StoriesService } from '@core/prisma';

@ApiTags('Stories')
@Controller('stories')
export class GetStoriesController {
  public constructor(private stories: StoriesService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  public getStories() {
    return this.stories.findMany();
  }
}

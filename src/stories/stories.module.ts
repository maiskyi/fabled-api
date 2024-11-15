import { Module } from '@nestjs/common';

import {
  GetStoriesController,
  GetStoriesService,
} from './controllers/getStories';
import { CreateStoryController } from './controllers/createStory';
import { GetStoryController, GetStoryService } from './controllers/getStory';

@Module({
  providers: [GetStoriesService, GetStoryService],
  controllers: [
    GetStoriesController,
    CreateStoryController,
    GetStoryController,
  ],
})
export class StoriesModule {}

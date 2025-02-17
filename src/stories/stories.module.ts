import { Module } from '@nestjs/common';
import { HasActiveSubscription } from '@services/revenue-cat';

import {
  GetStoriesController,
  GetStoriesService,
} from './controllers/getStories';
import {
  CreateStoryController,
  CreateStoryGuard,
  CreateStoryService,
  CreateStoryInterceptor,
} from './controllers/createStory';
import { GetStoryController, GetStoryService } from './controllers/getStory';

@Module({
  providers: [
    GetStoriesService,
    GetStoryService,
    HasActiveSubscription,
    CreateStoryGuard,
    CreateStoryService,
    CreateStoryInterceptor,
  ],
  controllers: [
    GetStoriesController,
    CreateStoryController,
    GetStoryController,
  ],
})
export class StoriesModule {}

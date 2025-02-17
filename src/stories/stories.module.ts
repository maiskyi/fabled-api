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
import { GenStoryHandler } from './commands/gen-story';

@Module({
  providers: [
    GetStoriesService,
    GetStoryService,
    HasActiveSubscription,
    CreateStoryGuard,
    CreateStoryService,
    CreateStoryInterceptor,
    GenStoryHandler,
  ],
  controllers: [
    GetStoriesController,
    CreateStoryController,
    GetStoryController,
  ],
})
export class StoriesModule {}

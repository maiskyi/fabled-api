import { Module } from '@nestjs/common';
import { HasActiveSubscription } from '@services/revenue-cat';

// Controller
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
// Sagas
import { GenerateStorySaga } from './sagas/generate-story';
// Events
import { NewStoryCreatedHandler } from './events/new-story-created';
// Queries
import { CreateNewStoryHandler } from './queries/create-new-story';
// Commands
import { GenStoryContentHandler } from './commands/gen-story-content';

@Module({
  providers: [
    GetStoriesService,
    GetStoryService,
    HasActiveSubscription,
    CreateStoryGuard,
    CreateStoryService,
    CreateStoryInterceptor,
    GenStoryContentHandler,
    GenerateStorySaga,
    NewStoryCreatedHandler,
    // Queries
    CreateNewStoryHandler,
  ],
  controllers: [
    GetStoriesController,
    CreateStoryController,
    GetStoryController,
  ],
})
export class StoriesModule {}

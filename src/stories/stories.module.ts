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
import { GenerateStorySaga } from './sagas/generateStory';
// Events
import { NewStoryCreatedHandler } from './events/newStoryCreated';
import { StoryContentGeneratedHandler } from './events/storyContentGenerated';
// Queries
import { CreateNewStoryHandler } from './queries/createNewStory';
import { AddStatusToStoryLogHandler } from './queries/addStatusToStoryLog';
import { UpdateStoryHandler } from './queries/updateStory';
// Commands
import { GenStoryContentHandler } from './commands/genStoryContent';

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
    // Queries
    CreateNewStoryHandler,
    AddStatusToStoryLogHandler,
    UpdateStoryHandler,
    // Events
    StoryContentGeneratedHandler,
    NewStoryCreatedHandler,
  ],
  controllers: [
    GetStoriesController,
    CreateStoryController,
    GetStoryController,
  ],
})
export class StoriesModule {}

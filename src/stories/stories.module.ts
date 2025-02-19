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
import { StoryImageGeneratedHandler } from './events/storyImageGenerated';
import { StoryImageUploadedHandler } from './events/storyImageUploaded';
// Queries
import { CreateNewStoryHandler } from './queries/createNewStory';
import { UpdateStoryStatusHandler } from './queries/updateStoryStatus';
import { UpdateStoryHandler } from './queries/updateStory';
// Commands
import { GenStoryContentHandler } from './commands/genStoryContent';
import { GenStoryImageHandler } from './commands/genStoryImage';
import { UploadStoryImageHandler } from './commands/uploadStoryImage';

@Module({
  providers: [
    GetStoriesService,
    GetStoryService,
    HasActiveSubscription,
    CreateStoryGuard,
    CreateStoryService,
    CreateStoryInterceptor,
    GenerateStorySaga,
    // Queries
    CreateNewStoryHandler,
    UpdateStoryStatusHandler,
    UpdateStoryHandler,
    // Events
    StoryContentGeneratedHandler,
    NewStoryCreatedHandler,
    StoryImageGeneratedHandler,
    StoryImageUploadedHandler,
    // Commands
    GenStoryContentHandler,
    GenStoryImageHandler,
    UploadStoryImageHandler,
  ],
  controllers: [
    GetStoriesController,
    CreateStoryController,
    GetStoryController,
  ],
})
export class StoriesModule {}

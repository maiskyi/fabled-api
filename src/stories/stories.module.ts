import { Module } from '@nestjs/common';
import {
  GetStoriesController,
  GetStoriesService,
} from './controllers/getStories';
import { CreateStoryController } from './controllers/createStory';

@Module({
  providers: [GetStoriesService],
  controllers: [GetStoriesController, CreateStoryController],
})
export class StoriesModule {}

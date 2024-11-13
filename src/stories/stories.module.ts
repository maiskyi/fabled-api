import { Module } from '@nestjs/common';
import { GetStoriesController } from './controllers/getStories';
import { CreateStoryController } from './controllers/createStory/';

@Module({
  controllers: [GetStoriesController, CreateStoryController],
})
export class StoriesModule {}

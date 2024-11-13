import { Module } from '@nestjs/common';
import { GetStoriesController } from './controllers/getStories';

@Module({
  controllers: [GetStoriesController],
})
export class StoriesModule {}

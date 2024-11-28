import { Module } from '@nestjs/common';

import {
  CreateFeedbackController,
  CreateFeedbackService,
} from './controllers/createFeedback';

@Module({
  controllers: [CreateFeedbackController],
  providers: [CreateFeedbackService],
})
export class FeedbacksModule {}

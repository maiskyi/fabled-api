import { Module } from '@nestjs/common';

// import { GetDatabaseUrlController } from './controllers/getDatabaseUrl';
import {
  GetAllPromptsController,
  GetAllPromptsService,
} from './controllers/getAllPrompts';

@Module({
  controllers: [
    GetAllPromptsController,
    // GetDatabaseUrlController
  ],
  providers: [GetAllPromptsService],
})
export class SystemModule {}

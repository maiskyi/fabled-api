import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma';
import { StoriesService } from './services/stories';

@Global()
@Module({
  exports: [StoriesService],
  providers: [PrismaService, StoriesService],
})
export class PrismaModule {}

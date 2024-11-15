import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma';

@Global()
@Module({
  exports: [PrismaService],
  providers: [PrismaService, PrismaService],
})
export class PrismaModule {}

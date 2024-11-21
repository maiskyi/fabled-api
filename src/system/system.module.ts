import { Module } from '@nestjs/common';

import { GetDatabaseUrlController } from './controllers/getDatabaseUrl';

@Module({
  controllers: [GetDatabaseUrlController],
})
export class SystemModule {}

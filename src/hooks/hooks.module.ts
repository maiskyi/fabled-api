import { Module } from '@nestjs/common';

import { CreateRevenueCatController } from './controllers/createRevenueCat';

@Module({
  controllers: [CreateRevenueCatController],
})
export class HooksModule {}

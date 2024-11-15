import { Module } from '@nestjs/common';

import {
  GetBootstrapController,
  GetBootstrapService,
} from './controllers/getBootstrap';

@Module({
  controllers: [GetBootstrapController],
  providers: [GetBootstrapService],
})
export class BootstrapModule {}

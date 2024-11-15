import { Module } from '@nestjs/common';

import { GetHealthCheckController } from './controllers/getHealthCheck';

@Module({
  controllers: [GetHealthCheckController],
})
export class HealthCheckModule {}

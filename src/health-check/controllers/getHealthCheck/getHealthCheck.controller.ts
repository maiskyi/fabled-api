import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller('health-check')
export class GetHealthCheckController {
  @Get()
  @ApiOkResponse({
    type: String,
  })
  @ApiOperation({
    operationId: 'getHealthCheck',
    summary: 'Get health check status',
  })
  public getHealthCheck() {
    return 'Ok';
  }
}

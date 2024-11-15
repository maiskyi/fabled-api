import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller('health-check')
export class GetHealthCheckController {
  @Get()
  @ApiOkResponse({
    type: String,
  })
  public getHealthCheck() {
    return 'Ok';
  }
}

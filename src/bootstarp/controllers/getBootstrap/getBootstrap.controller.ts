import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { GetBootstrapService } from './getBootstrap.service';

@ApiTags('Bootstrap')
@Controller('bootstrap')
export class GetBootstrapController {
  public constructor(private bootstrap: GetBootstrapService) {}
  @Get()
  @ApiOperation({
    operationId: 'getBootstrap',
    summary: 'Get app bootstrap data',
  })
  public getBootstrap() {
    return this.bootstrap.getData();
  }
}

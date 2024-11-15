import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Bootstrap } from '@common/dto';

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
  @ApiOkResponse({
    type: Bootstrap,
  })
  public getBootstrap(): Promise<Bootstrap> {
    return this.bootstrap.getData();
  }
}

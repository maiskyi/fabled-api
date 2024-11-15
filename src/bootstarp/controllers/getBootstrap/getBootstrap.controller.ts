import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Bootstrap } from '@common/dto';
import { ImageTransformationQuery } from '@common/dto';

import { GetBootstrapService } from './getBootstrap.service';
import { BootstrapQuery } from './getBootstrap.dto';

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
  @ApiQuery({
    name: 'image',
    type: ImageTransformationQuery,
    required: false,
  })
  public async getBootstrap(
    @Query() query: BootstrapQuery,
  ): Promise<Bootstrap> {
    const { image } = query;

    const { characters, placeOfEvents, ...rest } =
      await this.bootstrap.getData();

    return { ...rest };
  }
}

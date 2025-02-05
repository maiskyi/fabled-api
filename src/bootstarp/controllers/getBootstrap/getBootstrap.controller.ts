import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ImageTransformationQuery } from '@common/dto';
import { CloudinaryService } from '@services/cloudinary';
import { get } from 'lodash';

import { GetBootstrapService } from './getBootstrap.service';
import { BootstrapQuery, BootstrapResponse } from './getBootstrap.dto';

@ApiTags('Bootstrap')
@Controller('bootstrap')
export class GetBootstrapController {
  public constructor(
    private bootstrap: GetBootstrapService,
    private cloudinary: CloudinaryService,
  ) {}

  @Get()
  @ApiOperation({
    operationId: 'getBootstrap',
    summary: 'Get app bootstrap data',
  })
  @ApiOkResponse({
    type: BootstrapResponse,
  })
  @ApiQuery({
    name: 'image',
    type: ImageTransformationQuery,
    required: false,
  })
  public async getBootstrap(
    @Query() query: BootstrapQuery,
  ): Promise<BootstrapResponse> {
    const { image: transformation } = query;

    const {
      characters: initialCharacters,
      placeOfEvents: initialPlaceOfEvents,
      ...rest
    } = await this.bootstrap.getData();

    const characters = initialCharacters.map(({ image, ...rest }) => ({
      ...rest,
      image: this.cloudinary.image(
        get(image, ['_meta', 'public_id']),
        transformation,
      ),
    }));

    const placeOfEvents = initialPlaceOfEvents.map(({ image, ...rest }) => ({
      ...rest,
      image: this.cloudinary.image(
        get(image, ['_meta', 'public_id']),
        transformation,
      ),
    }));

    return { ...rest, characters, placeOfEvents };
  }
}

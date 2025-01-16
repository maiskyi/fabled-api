import { get } from 'lodash';
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@services/firebase';
import { Story, StoryStatusLog } from '@common/dto';
import { CloudinaryService } from '@services/cloudinary';

import { GetStoryService } from './getStory.service';
import { GetStoryQuery } from './getStory.dto';

@ApiTags('Stories')
@Controller('stories')
export class GetStoryController {
  public constructor(
    private story: GetStoryService,
    private cloudinary: CloudinaryService,
  ) {}

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Get user story',
    operationId: 'getStory',
  })
  @ApiOkResponse({
    type: Story,
  })
  @ApiParam({
    required: true,
    name: 'id',
  })
  public async getStory(
    @Param('id') id: string,
    @Query() query: GetStoryQuery,
  ): Promise<Story> {
    const { image: transformation } = query;

    const { image, statusLog, ...rest } = await this.story.getStory({
      id,
    });

    return {
      ...rest,
      statusLog: statusLog as StoryStatusLog[],
      image: this.cloudinary.image(
        get(image, ['_meta', 'public_id']),
        transformation,
      ),
    };
  }
}

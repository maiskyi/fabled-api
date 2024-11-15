import { get } from 'lodash';

import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard, User, UserInfo } from '@services/firebase';

import { Story } from '../../dto';

import { GetStoryService } from './getStory.service';

@ApiTags('Stories')
@Controller('stories')
export class GetStoryController {
  public constructor(private story: GetStoryService) {}

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
    @User() user: UserInfo,
    @Param('id') id: string,
  ): Promise<Story> {
    const { uid: firebaseUserId } = user;

    const { image, ...rest } = await this.story.getStory({
      firebaseUserId,
      id,
    });

    return { ...rest, image: { publicId: get(image, ['_meta', 'public_id']) } };
  }
}

import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@services/firebase';

@ApiTags('Stories')
@Controller('stories')
export class GetStoriesController {
  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  public getStories() {
    return 123;
  }
}

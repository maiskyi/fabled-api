import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@services/firebase';

@ApiTags('Stories')
@Controller('stories')
export class CreateStoryController {
  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  public createStory() {
    return 123;
  }
}

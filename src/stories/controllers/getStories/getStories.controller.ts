import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Stories')
@Controller('stories')
export class GetStoriesController {
  @Get()
  public getStories() {
    return 123;
  }
}

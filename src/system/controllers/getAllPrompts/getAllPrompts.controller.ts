import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GetAllPromptsService } from './getAllPrompts.service';

@ApiTags('System')
@Controller('system')
export class GetAllPromptsController {
  public constructor(private service: GetAllPromptsService) {}

  @Get('prompts')
  public async getAllPrompts() {
    const { prompt, characters, moralLessons, placesOfEvent, readTimes } =
      await this.service.getCollections();

    const res = characters.reduce((res1, character) => {
      return moralLessons.reduce((res2, moralLesson) => {
        return placesOfEvent.reduce((res3, placeOfEvent) => {
          return readTimes.reduce((res4, readTime) => {
            return [
              ...res4,
              {
                readTime,
                character: character?.title,
                moralLesson: moralLesson?.title,
                placeOfEvent: placeOfEvent?.title,
                prompt: this.service.getPrompt({
                  prompt,
                  readTime,
                  placeOfEvent,
                  character,
                  moralLesson,
                }),
              },
            ];
          }, res3);
        }, res2);
      }, res1);
    }, []);

    return res;
  }
}

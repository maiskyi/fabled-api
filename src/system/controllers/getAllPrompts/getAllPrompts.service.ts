import { PrismaService } from '@core/prisma';
import { Injectable } from '@nestjs/common';
import { render } from 'micromustache';

import { GetPromptParams } from './getAllPrompts.types';

@Injectable()
export class GetAllPromptsService {
  public constructor(private prisma: PrismaService) {}

  public async getCollections() {
    const promptRequest = this.prisma.prompt.findFirst({
      select: {
        textPrompt: true,
      },
    });

    const charactersRequest = this.prisma.character.findMany({
      select: {
        title: true,
        description: true,
      },
    });

    const moralLessonsRequest = this.prisma.moralLesson.findMany({
      select: {
        title: true,
        description: true,
      },
    });

    const placesOfEventRequest = this.prisma.placeOfEvent.findMany({
      select: {
        title: true,
      },
    });

    const readTimes = [5, 7, 10];

    const [prompt, characters, moralLessons, placesOfEvent] = await Promise.all(
      [
        promptRequest,
        charactersRequest,
        moralLessonsRequest,
        placesOfEventRequest,
      ],
    );

    return { prompt, characters, moralLessons, placesOfEvent, readTimes };
  }

  public getPrompt({
    prompt,
    character,
    readTime,
    moralLesson,
    placeOfEvent,
  }: GetPromptParams) {
    return render(prompt?.textPrompt || '', {
      character: character?.title,
      characterNote: character?.description && `(${character?.description})`,
      contentLength: readTime * 150,
      description: moralLesson?.title,
      descriptionNote:
        moralLesson?.description && `(${moralLesson?.description})`,
      scene: placeOfEvent?.title,
    }).replace(/<\/?[^>]+(>|$)/g, '');
  }
}

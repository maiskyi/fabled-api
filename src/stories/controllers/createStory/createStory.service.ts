import { PrismaService } from '@core/prisma';
import { Injectable } from '@nestjs/common';
import { render } from 'micromustache';

import { CreateStoryParams } from './createStory.types';

@Injectable()
export class CreateStoryService {
  public constructor(private prisma: PrismaService) {}

  public async createStory({
    readTime,
    promptId,
    characterId,
    moralLessonId,
    placeOfEventId,
  }: CreateStoryParams) {
    const promptFindOne = this.prisma.prompt.findUniqueOrThrow({
      where: {
        id: promptId,
      },
    });

    const characterFindOne = this.prisma.character.findUniqueOrThrow({
      where: {
        id: characterId,
      },
      select: {
        title: true,
        description: true,
      },
    });

    const moralLessonFindOne = this.prisma.moralLesson.findUniqueOrThrow({
      where: {
        id: moralLessonId,
      },
      select: {
        title: true,
        description: true,
      },
    });

    const placeOfEventFindOne = this.prisma.placeOfEvent.findUniqueOrThrow({
      where: {
        id: placeOfEventId,
      },
      select: {
        title: true,
      },
    });

    const [prompt, character, moralLesson, placeOfEvent] = await Promise.all([
      promptFindOne,
      characterFindOne,
      moralLessonFindOne,
      placeOfEventFindOne,
    ]);

    const message = render(prompt?.message || '', {
      character: character.title,
      description: moralLesson.title,
      readTime: readTime,
      scene: placeOfEvent.title,
    }).replace(/<\/?[^>]+(>|$)/g, '');

    const contentPrompt = render(prompt?.textPrompt || '', {
      character: character?.title,
      characterNote: character.description && `(${character.description})`,
      contentLength: (readTime || 0) * 150,
      description: moralLesson.title,
      descriptionNote:
        moralLesson?.description && `(${moralLesson?.description})`,
      scene: placeOfEvent?.title,
    }).replace(/<\/?[^>]+(>|$)/g, '');

    const imagePrompt = render(prompt?.imagePrompt || '', {
      character: character?.title,
      characterNote: character?.description && `(${character?.description})`,
      scene: placeOfEvent?.title,
    }).replace(/<\/?[^>]+(>|$)/g, '');

    const { id } = await this.prisma.story.create({
      data: {
        message,
        contentPrompt,
        imagePrompt,
        readTime,
        character: {
          connect: {
            id: characterId,
          },
        },
        moralLesson: {
          connect: {
            id: moralLessonId,
          },
        },
        prompt: {
          connect: {
            id: promptId,
          },
        },
        placeOfEvent: {
          connect: {
            id: placeOfEventId,
          },
        },
      },
      select: {
        id: true,
      },
    });

    return { id };
  }
}

import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '@core/prisma';
import { render } from 'micromustache';

import { CreateNewStoryQuery } from './createNewStory.query';

@QueryHandler(CreateNewStoryQuery)
export class CreateNewStoryHandler
  implements IQueryHandler<CreateNewStoryQuery>
{
  constructor(private prisma: PrismaService) {}

  private async findUniqueCharacter(id?: string) {
    if (id) {
      return this.prisma.character.findUnique({
        where: { id },
        select: { title: true, description: true },
      });
    }
    return { title: '', description: '' };
  }

  async execute({ query: data }: CreateNewStoryQuery) {
    const promptRequest = this.prisma.prompt.findUnique({
      where: { id: data.promptId },
      select: { message: true, textPrompt: true },
    });

    const characterRequest = this.findUniqueCharacter(data.characterId);

    const moralLessonRequest = this.prisma.moralLesson.findUnique({
      where: { id: data.moralLessonId },
      select: { title: true, description: true },
    });

    const placeOfEventRequest = this.prisma.placeOfEvent.findUnique({
      where: { id: data.placeOfEventId },
      select: { title: true },
    });

    const [prompt, character, moralLesson, placeOfEvent] = await Promise.all([
      promptRequest,
      characterRequest,
      moralLessonRequest,
      placeOfEventRequest,
    ]);

    const message = render(prompt?.message || '', {
      character: character?.title,
      description: moralLesson?.title,
      readTime: data.readTime,
      scene: placeOfEvent?.title,
      childGender: data.childGender,
      childName: data.childName,
      childAge: data.childAge,
    }).replace(/<\/?[^>]+(>|$)/g, '');

    const contentPrompt = render(prompt?.textPrompt || '', {
      childGender: data.childGender,
      childName: data.childName,
      childAge: data.childAge,
      character: character?.title,
      characterNote: character?.description && `(${character?.description})`,
      contentLength: (data.readTime || 0) * 150,
      description: moralLesson?.title,
      descriptionNote:
        moralLesson?.description && `(${moralLesson?.description})`,
      scene: placeOfEvent?.title,
    }).replace(/<\/?[^>]+(>|$)/g, '');

    return this.prisma.story.create({
      data: {
        message,
        contentPrompt,
        ...data,
      },
      select: {
        id: true,
      },
    });
  }
}

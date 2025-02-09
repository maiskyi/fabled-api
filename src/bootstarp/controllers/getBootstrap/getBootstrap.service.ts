import { PrismaService } from '@core/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetBootstrapService {
  public constructor(private prisma: PrismaService) {}

  public async getData() {
    const findManyCharacters = this.prisma.character.findMany({
      where: {
        isPublished: true,
      },
      select: {
        id: true,
        title: true,
        image: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const findManyPlaceOfEvents = this.prisma.placeOfEvent.findMany({
      where: {
        isPublished: true,
      },
      select: {
        id: true,
        title: true,
        image: true,
        prompt: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const findManyMoralLessons = this.prisma.moralLesson.findMany({
      where: {
        isPublished: true,
      },
      select: {
        id: true,
        title: true,
        description: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const findManyPrompts = this.prisma.prompt.findMany({
      where: {
        isPublished: true,
      },
      select: {
        id: true,
        message: true,
        title: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const findUniqueConfig = this.prisma.config.findUnique({
      where: {
        id: 1,
      },
      select: {
        privacyPolicyUrl: true,
        termsAndConditionsUrl: true,
      },
    });

    const [characters, placeOfEvents, moralLessons, prompts, config] =
      await Promise.all([
        findManyCharacters,
        findManyPlaceOfEvents,
        findManyMoralLessons,
        findManyPrompts,
        findUniqueConfig,
      ]);

    return { characters, placeOfEvents, moralLessons, prompts, config };
  }
}

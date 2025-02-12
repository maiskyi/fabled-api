import { PrismaService } from '@core/prisma';
import { Injectable } from '@nestjs/common';
import { FabledBucketService } from '@services/aws-s3/services/fabled-bucket';

@Injectable()
export class GetBootstrapService {
  public constructor(
    private prisma: PrismaService,
    private s3: FabledBucketService,
  ) {}

  private async getLullabies() {
    const findManyLullabies = await this.prisma.lullaby.findMany({
      select: {
        id: true,
        title: true,
        mp3_filename: true,
      },
      where: {
        isPublished: true,
      },
    });

    const lullabiesRequests = findManyLullabies.map(
      ({ id, title, mp3_filename }) => {
        return this.s3
          .getSignedUrl({
            filename: mp3_filename,
          })
          .then(({ url }) => ({ id, url, title }));
      },
    );

    const lullabies = Promise.all(lullabiesRequests);

    return lullabies;
  }

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

    const findManyLullabies = this.getLullabies();

    const [
      characters,
      placeOfEvents,
      moralLessons,
      prompts,
      config,
      lullabies,
    ] = await Promise.all([
      findManyCharacters,
      findManyPlaceOfEvents,
      findManyMoralLessons,
      findManyPrompts,
      findUniqueConfig,
      findManyLullabies,
    ]);

    console.log(lullabies);

    return { characters, placeOfEvents, moralLessons, prompts, config };
  }
}

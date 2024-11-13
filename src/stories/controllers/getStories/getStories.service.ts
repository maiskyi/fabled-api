import { Injectable } from '@nestjs/common';
import { PrismaService } from '@core/prisma';
import { GetStoriesParams } from './getStories.types';

@Injectable()
export class GetStoriesService {
  public constructor(private prisma: PrismaService) {}

  public async getStories({ firebaseUserId, skip, take }: GetStoriesParams) {
    const total = await this.prisma.story.count({
      where: {
        firebaseUserId: {
          equals: firebaseUserId,
        },
      },
    });

    const data = await this.prisma.story.findMany({
      skip,
      take,
      where: {
        firebaseUserId: {
          equals: firebaseUserId,
        },
      },
    });

    return { data, total };
  }
}

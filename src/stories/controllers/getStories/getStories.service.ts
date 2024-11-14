import { Injectable } from '@nestjs/common';
import { PrismaService } from '@core/prisma';

import { GetStoriesParams } from './getStories.types';

@Injectable()
export class GetStoriesService {
  public constructor(private prisma: PrismaService) {}

  public async getStories({
    firebaseUserId,
    skip,
    take,
    status,
  }: GetStoriesParams) {
    const count = this.prisma.story.count({
      where: {
        firebaseUserId: {
          equals: firebaseUserId,
        },
      },
    });

    const findMany = this.prisma.story.findMany({
      skip,
      take,
      select: {
        id: true,
        title: true,
        readTime: true,
      },
      where: {
        firebaseUserId: {
          equals: firebaseUserId,
        },
        status: {
          equals: status,
        },
      },
    });

    const [total, data] = await Promise.all([count, findMany]);

    return { data, total };
  }
}

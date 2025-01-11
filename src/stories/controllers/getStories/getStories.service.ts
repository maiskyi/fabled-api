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
    deviceId,
  }: GetStoriesParams) {
    console.log(deviceId);
    const count = this.prisma.story.count({
      where: {
        OR: [
          {
            firebaseUserId: {
              equals: firebaseUserId,
            },
            status: {
              equals: status,
            },
          },
          {
            deviceId: {
              equals: deviceId,
            },
            status: {
              equals: status,
            },
          },
        ],
      },
    });

    const findMany = this.prisma.story.findMany({
      skip,
      take,
      select: {
        id: true,
        title: true,
        readTime: true,
        image: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        OR: [
          {
            firebaseUserId: {
              equals: firebaseUserId,
            },
            status: {
              equals: status,
            },
          },
          {
            deviceId: {
              equals: deviceId,
            },
            status: {
              equals: status,
            },
          },
        ],
      },
    });

    const [total, data] = await Promise.all([count, findMany]);

    console.log(total, data);

    return { data, total };
  }
}

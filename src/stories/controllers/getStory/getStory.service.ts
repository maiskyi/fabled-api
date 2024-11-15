import { Injectable } from '@nestjs/common';
import { PrismaService } from '@core/prisma';

import { GetStoriesParams } from './getStory.types';

@Injectable()
export class GetStoryService {
  public constructor(private prisma: PrismaService) {}

  public async getStory({ id, firebaseUserId }: GetStoriesParams) {
    return this.prisma.story.findUniqueOrThrow({
      select: {
        id: true,
        title: true,
        readTime: true,
        image: true,
        content: true,
      },
      where: {
        firebaseUserId: {
          equals: firebaseUserId,
        },
        id,
      },
    });
  }
}

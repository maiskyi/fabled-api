import { Injectable } from '@nestjs/common';
import { PrismaService } from '@core/prisma';

import {
  GetUserStoriesIdsParams,
  GetExistingStoryParams,
  CopyExistingStoryParams,
} from './createStory.types';

@Injectable()
export class CreateStoryService {
  public constructor(private prisma: PrismaService) {}

  public async getUserStoriesIds(params: GetUserStoriesIdsParams) {
    const userStories = await this.prisma.story.findMany({
      where: {
        ...params,
      },
      select: {
        id: true,
        parentId: true,
      },
    });

    const userStoriesIds = userStories
      .reduce((res, { id, parentId }) => [...res, id, parentId], [] as string[])
      .filter((v) => !!v);

    return { userStoriesIds };
  }

  public async getExistingStory({
    userStoriesIds,
    ...params
  }: GetExistingStoryParams) {
    const story = await this.prisma.story.findFirst({
      where: {
        id: {
          notIn: userStoriesIds,
        },
        parentId: null,
        ...params,
      },
    });

    return { story };
  }

  public async copyExistingStory({
    story,
    firebaseUserId,
  }: CopyExistingStoryParams) {
    const { firebaseUserId: _, id: parentId, ...data } = story;

    const { id } = await this.prisma.story.create({
      data: {
        ...data,
        firebaseUserId,
        parentId,
      },
    });

    return { id };
  }
}
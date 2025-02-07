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

  public async getUserStoriesIds({
    firebaseUserId,
    deviceId,
    ...params
  }: GetUserStoriesIdsParams) {
    const userStories = await this.prisma.story.findMany({
      where: {
        OR: [
          { firebaseUserId, ...params },
          { deviceId, ...params },
        ],
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

  public async getExistingStory(params: GetExistingStoryParams) {
    const { firebaseUserId: _1, deviceId: _2, ...search } = params;
    const { userStoriesIds } = await this.getUserStoriesIds(params);

    const story = await this.prisma.story.findFirst({
      where: {
        id: {
          notIn: userStoriesIds,
        },
        parentId: null,
        ...search,
      },
    });

    return { story };
  }

  public async copyExistingStory({
    story,
    deviceId,
    firebaseUserId,
  }: CopyExistingStoryParams) {
    const {
      firebaseUserId: _firebaseUserId,
      id: parentId,
      createdAt: _createdAt,
      ...data
    } = story;

    const { id } = await this.prisma.story.create({
      data: {
        ...data,
        deviceId,
        firebaseUserId,
        parentId,
      },
    });

    return { id };
  }
}

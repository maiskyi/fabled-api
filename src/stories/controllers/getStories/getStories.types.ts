import { StoryStatusType } from '@prisma/client';

export interface GetStoriesParams {
  firebaseUserId: string;
  skip: number;
  take: number;
  status: StoryStatusType;
  deviceId?: string;
}

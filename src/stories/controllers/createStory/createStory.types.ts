import { Story } from '@prisma/client';

export interface CreateStoryParams {
  readonly characterId: string;
  readonly moralLessonId: string;
  readonly placeOfEventId: string;
  readonly promptId: string;
  readonly readTime: number;
  readonly firebaseUserId: string;
}

export interface GetUserStoriesIdsParams {
  readonly firebaseUserId: string;
  readonly characterId?: string;
  readonly moralLessonId?: string;
  readonly placeOfEventId?: string;
  readonly promptId?: string;
  readonly readTime?: number;
  readonly deviceId?: string;
}

export interface GetExistingStoryParams {
  readonly characterId?: string;
  readonly moralLessonId?: string;
  readonly placeOfEventId?: string;
  readonly promptId?: string;
  readonly readTime?: number;
  readonly userStoriesIds: string[];
}

export interface CopyExistingStoryParams {
  firebaseUserId: string;
  story: Story;
  deviceId: string;
}

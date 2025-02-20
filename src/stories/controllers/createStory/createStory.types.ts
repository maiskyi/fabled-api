import { Story } from '@prisma/client';

import { CreateStoryRequest } from './createStory.dto';

export interface CreateStoryParams {
  readonly characterId: string;
  readonly moralLessonId: string;
  readonly placeOfEventId: string;
  readonly promptId: string;
  readonly readTime: number;
  readonly firebaseUserId: string;
}

export interface GetUserStoriesIdsParams extends CreateStoryRequest {
  readonly firebaseUserId: string;
  readonly deviceId?: string;
}

export class GetExistingStoryParams extends CreateStoryRequest {
  readonly firebaseUserId: string;
  readonly deviceId?: string;
}

export interface CopyExistingStoryParams {
  firebaseUserId: string;
  story: Story;
  deviceId: string;
}

export interface GenCannelMessageParams {
  id: string;
}

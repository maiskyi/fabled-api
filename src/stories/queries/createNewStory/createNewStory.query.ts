import { Query } from '@nestjs/cqrs';
import { StoryChildGenderType } from '@prisma/client';

export interface CreateNewStoryResult {
  id: string;
}

interface CreateNewStoryQueryType {
  readonly characterId?: string;
  readonly moralLessonId: string;
  readonly placeOfEventId: string;
  readonly promptId: string;
  readonly readTime: number;
  readonly firebaseUserId: string;
  readonly deviceId: string;
  readonly childName?: string;
  readonly childAge?: number;
  readonly childGender?: StoryChildGenderType;
}

export class CreateNewStoryQuery extends Query<CreateNewStoryResult> {
  public constructor(public readonly query: CreateNewStoryQueryType) {
    super();
  }
}

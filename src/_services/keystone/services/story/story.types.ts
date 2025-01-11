export interface CreateStoryParams {
  readonly characterId: string;
  readonly moralLessonId: string;
  readonly placeOfEventId: string;
  readonly promptId: string;
  readonly readTime: number;
  readonly firebaseUserId: string;
  readonly deviceId: string;
}

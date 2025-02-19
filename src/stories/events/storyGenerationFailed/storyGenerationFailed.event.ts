import { StoryStatusLog } from '@common/dto';

interface StoryGenerationFailedEventType {
  id: string;
  error: StoryStatusLog;
  message?: string;
}

export class StoryGenerationFailedEvent {
  public constructor(public readonly event: StoryGenerationFailedEventType) {}
}

import { Query } from '@nestjs/cqrs';
import { JsonValue } from '@prisma/client/runtime/library';

import { StoryStatusLog } from './addStatusToStoryLog.types';

interface AddStatusToStoryLogRequest {
  id: string;
  statusLog: StoryStatusLog[];
}

interface AddStatusToStoryLogResponse {
  statusLog: JsonValue;
  contentPrompt: string;
}

export class AddStatusToStoryLogQuery extends Query<AddStatusToStoryLogResponse> {
  public constructor(public readonly story: AddStatusToStoryLogRequest) {
    super();
  }
}

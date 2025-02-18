import { Query } from '@nestjs/cqrs';
import { JsonValue } from '@prisma/client/runtime/library';

import { StoryStatusLog } from './addStatusToStoryLog.types';

interface AddStatusToStoryLogQueryType {
  id: string;
  statusLog: StoryStatusLog[];
}

interface AddStatusToStoryLogQueryResponse {
  statusLog: JsonValue;
  contentPrompt: string;
}

export class AddStatusToStoryLogQuery extends Query<AddStatusToStoryLogQueryResponse> {
  public constructor(public readonly query: AddStatusToStoryLogQueryType) {
    super();
  }
}

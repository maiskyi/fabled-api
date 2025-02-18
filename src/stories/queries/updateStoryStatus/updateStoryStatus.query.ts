import { Query } from '@nestjs/cqrs';
import { JsonValue } from '@prisma/client/runtime/library';

import { StoryStatusLog } from './updateStoryStatus.types';

interface UpdateStoryStatusQueryType {
  id: string;
  log: StoryStatusLog;
}

interface UpdateStoryStatusQueryResult {
  statusLog: JsonValue;
  contentPrompt: string;
}

export class UpdateStoryStatusQuery extends Query<UpdateStoryStatusQueryResult> {
  public constructor(public readonly query: UpdateStoryStatusQueryType) {
    super();
  }
}

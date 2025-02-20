import { StoryStatusLog } from '@common/dto';
import { Query } from '@nestjs/cqrs';
import { StoryStatusType } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';

interface UpdateStoryStatusQueryType {
  id: string;
  log: StoryStatusLog;
  status?: StoryStatusType;
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

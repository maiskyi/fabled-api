import { Query } from '@nestjs/cqrs';
import { JsonValue } from '@prisma/client/runtime/library';

export interface UpdateStoryResult {
  id: string;
}

interface UpdateStoryRequest {
  readonly id: string;
  readonly title?: string;
  readonly content?: string;
  readonly imagePrompt?: string;
  readonly image?: {
    id: string;
    _meta: JsonValue;
  };
}

export class UpdateStoryQuery extends Query<void> {
  public constructor(public readonly story: UpdateStoryRequest) {
    super();
  }
}

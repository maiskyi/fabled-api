import { Query } from '@nestjs/cqrs';

export interface UpdateStoryResult {
  id: string;
}

interface UpdateStoryRequest {
  readonly id: string;
  readonly data: {
    readonly title?: string;
    readonly content?: string;
    readonly imagePrompt?: string;
  };
}

export class UpdateStoryQuery extends Query<void> {
  public constructor(public readonly story: UpdateStoryRequest) {
    super();
  }
}

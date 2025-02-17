interface NewStoryCreatedEventParams {
  id: string;
}

export class NewStoryCreatedEvent {
  public constructor(public readonly story: NewStoryCreatedEventParams) {}
}

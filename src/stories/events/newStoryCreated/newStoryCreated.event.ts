interface NewStoryCreatedEventType {
  id: string;
}

export class NewStoryCreatedEvent {
  public constructor(public readonly event: NewStoryCreatedEventType) {}
}

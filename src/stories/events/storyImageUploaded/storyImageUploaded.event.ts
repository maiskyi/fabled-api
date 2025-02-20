interface StoryImageUploadedEventType {
  id: string;
}

export class StoryImageUploadedEvent {
  public constructor(public readonly event: StoryImageUploadedEventType) {}
}

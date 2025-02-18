interface StoryContentGeneratedParams {
  id: string;
  title: string;
  content: string;
  imagePrompt: string;
}

export class StoryContentGeneratedEvent {
  public constructor(public readonly story: StoryContentGeneratedParams) {}
}

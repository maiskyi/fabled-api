import { Image } from 'openai/resources';

interface StoryImageGeneratedEventType extends Image {
  id: string;
}

export class StoryImageGeneratedEvent {
  public constructor(public readonly event: StoryImageGeneratedEventType) {}
}

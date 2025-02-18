import { DTO } from '@services/stabilityai';

interface StoryImageGeneratedEventType extends DTO.Image {
  id: string;
}

export class StoryImageGeneratedEvent {
  public constructor(public readonly event: StoryImageGeneratedEventType) {}
}

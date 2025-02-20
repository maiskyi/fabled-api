import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { StoryImageGeneratedEvent } from './storyImageGenerated.event';

@EventsHandler(StoryImageGeneratedEvent)
export class StoryImageGeneratedHandler
  implements IEventHandler<StoryImageGeneratedEvent>
{
  public handle(_event: StoryImageGeneratedEvent) {}
}

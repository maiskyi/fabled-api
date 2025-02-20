import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { StoryContentGeneratedEvent } from './storyContentGenerated.event';

@EventsHandler(StoryContentGeneratedEvent)
export class StoryContentGeneratedHandler
  implements IEventHandler<StoryContentGeneratedEvent>
{
  public handle(_event: StoryContentGeneratedEvent) {}
}

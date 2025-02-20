import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { StoryGenerationFailedEvent } from './storyGenerationFailed.event';

@EventsHandler(StoryGenerationFailedEvent)
export class StoryGenerationFailedHandler
  implements IEventHandler<StoryGenerationFailedEvent>
{
  public handle(_event: StoryGenerationFailedEvent) {}
}

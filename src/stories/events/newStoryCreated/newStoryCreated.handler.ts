import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { NewStoryCreatedEvent } from './newStoryCreated.event';

@EventsHandler(NewStoryCreatedEvent)
export class NewStoryCreatedHandler
  implements IEventHandler<NewStoryCreatedEvent>
{
  public handle(_event: NewStoryCreatedEvent) {}
}

import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { NewStoryCreatedEvent } from './newStoryCreated.event';

@EventsHandler(NewStoryCreatedEvent)
export class NewStoryCreatedHandler
  implements IEventHandler<NewStoryCreatedEvent>
{
  //   constructor(private repository: HeroRepository) {}

  public handle(event: NewStoryCreatedEvent) {
    console.log(event);
    // Business logic
  }
}

import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { StoryImageUploadedEvent } from './storyImageUploaded.event';

@EventsHandler(StoryImageUploadedEvent)
export class StoryImageUploadedHandler
  implements IEventHandler<StoryImageUploadedEvent>
{
  public handle(_event: StoryImageUploadedEvent) {}
}

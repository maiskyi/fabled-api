import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, merge, Observable, tap } from 'rxjs';

// Commands
import { GenStoryContentCommand } from '../../commands/genStoryContent';
import { GenStoryImageCommand } from '../../commands/genStoryImage';
import { UploadStoryImageCommand } from '../../commands/uploadStoryImage';
// Events
import { NewStoryCreatedEvent } from '../../events/newStoryCreated';
import { StoryContentGeneratedEvent } from '../../events/storyContentGenerated';
import { StoryImageGeneratedEvent } from '../../events/storyImageGenerated';
import { StoryImageUploadedEvent } from '../../events/storyImageUploaded';

@Injectable()
export class GenerateStorySaga {
  private readonly logger = new Logger(GenerateStorySaga.name, {
    timestamp: true,
  });

  @Saga()
  public generate(events$: Observable<any>): Observable<ICommand> {
    return merge(
      events$.pipe(
        ofType(NewStoryCreatedEvent),
        map(
          ({ event }: NewStoryCreatedEvent) =>
            new GenStoryContentCommand(event),
        ),
        tap(() => this.logger.log('Generating story content...')),
      ),
      events$.pipe(
        ofType(StoryContentGeneratedEvent),
        map(
          ({ event }: StoryContentGeneratedEvent) =>
            new GenStoryImageCommand(event),
        ),
        tap(() => this.logger.log(`Generating story image...`)),
      ),
      events$.pipe(
        ofType(StoryImageGeneratedEvent),
        map(
          ({ event }: StoryImageGeneratedEvent) =>
            new UploadStoryImageCommand(event),
        ),
        tap(() => this.logger.log(`Uploading story image...`)),
      ),
      events$.pipe(
        ofType(StoryImageUploadedEvent),
        map(
          ({ event }: StoryImageGeneratedEvent) =>
            new UploadStoryImageCommand(event),
        ),
        tap(() => this.logger.log(`Story image uploaded...`)),
      ),
    );
  }
}

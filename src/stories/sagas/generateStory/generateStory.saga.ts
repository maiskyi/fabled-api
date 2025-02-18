import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, merge, Observable, tap } from 'rxjs';

import { NewStoryCreatedEvent } from '../../events/newStoryCreated';
import { GenStoryContentCommand } from '../../commands/genStoryContent';
import { StoryContentGeneratedEvent } from '../../events/storyContentGenerated';
import { GenStoryImageCommand } from '../../commands/genStoryImage';

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
    );
  }
}

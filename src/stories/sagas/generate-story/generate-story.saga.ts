import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, merge, Observable } from 'rxjs';

import { NewStoryCreatedEvent } from '../../events/new-story-created';
import { GenStoryContentCommand } from '../../commands/gen-story-content';

@Injectable()
export class GenerateStorySaga {
  @Saga()
  public generate(events$: Observable<any>): Observable<ICommand> {
    // return events$
    //   .pipe
    //   //   ofType(HeroKilledDragonEvent),
    //   //   map((event) => new DropAncientItemCommand(event.heroId, fakeItemID)),
    //   ();

    return merge(
      events$.pipe(
        ofType(NewStoryCreatedEvent),
        map(
          (event: NewStoryCreatedEvent) =>
            new GenStoryContentCommand(event.story),
        ),
      ),
      // events$.pipe(
      //   filter((event) => event instanceof PaymentFailedEvent),
      //   map(
      //     (event: PaymentFailedEvent) =>
      //       new NotifyCustomerCommand(event.orderId),
      //   ),
      // ),
    );
  }
}

import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { FabledChanelService } from '@services/telegram';

import { CreateStoryResponse } from './createStory.dto';
import { GenCannelMessageParams } from './createStory.types';

@Injectable()
export class CreateStoryInterceptor implements NestInterceptor {
  public constructor(private channel: FabledChanelService) {}

  private genChannelMessage({ id }: GenCannelMessageParams) {
    return [
      '<strong>App</strong>',
      `Event: Story Create Request`,
      `Story ID: ${id}`,
    ].join('\n');
  }

  public intercept(_, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap<CreateStoryResponse>(({ id }) => {
        return this.channel.sendMessage({
          message: this.genChannelMessage({ id }),
        });
      }),
    );
  }
}

import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { OnepAiClient } from '@services/openai';

import { GenStoryImageCommand } from './genStoryImage.command';

@CommandHandler(GenStoryImageCommand)
export class GenStoryImageHandler
  implements ICommandHandler<GenStoryImageCommand>
{
  constructor(
    private openai: OnepAiClient,
    private queryBus: QueryBus,
    private eventBus: EventBus,
  ) {}

  async execute({ command }: GenStoryImageCommand) {
    console.log(command);
  }
}

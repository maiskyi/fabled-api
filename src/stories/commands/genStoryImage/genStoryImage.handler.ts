import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
import { OnepAiClient } from '@services/openai';
import { StabilityAiClient } from '@services/stabilityai';

import { GenStoryImageCommand } from './genStoryImage.command';

@CommandHandler(GenStoryImageCommand)
export class GenStoryImageHandler
  implements ICommandHandler<GenStoryImageCommand>
{
  constructor(
    private openai: OnepAiClient,
    private queryBus: QueryBus,
    private eventBus: EventBus,
    private client: StabilityAiClient,
  ) {}

  async execute({ command }: GenStoryImageCommand) {
    try {
      const {
        artifacts: [image],
      } = await this.client.sdxl.textToImage('stable-diffusion-xl-1024-v1-0', {
        text_prompts: [
          {
            text: command.imagePrompt,
          },
        ],
        samples: 1,
        width: 768,
        height: 1344,
      });
      console.log(image);
    } catch (e) {
      console.log(e);
    }
  }
}

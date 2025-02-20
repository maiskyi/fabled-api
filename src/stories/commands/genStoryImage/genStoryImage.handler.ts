import {
  CommandHandler,
  EventBus,
  ICommandHandler,
  QueryBus,
} from '@nestjs/cqrs';
// import { StabilityAiClient } from '@services/stabilityai';
import { StoryStatusLog } from '@common/dto';
import { OnepAiClient } from '@services/openai';

import { UpdateStoryStatusQuery } from '../../queries/updateStoryStatus';
import { StoryImageGeneratedEvent } from '../../events/storyImageGenerated';
import { StoryGenerationFailedEvent } from '../../events/storyGenerationFailed';

import { GenStoryImageCommand } from './genStoryImage.command';
import { IMAGE_STYLE } from './genStoryImage.const';

// @CommandHandler(GenStoryImageCommand)
// export class GenStoryImageHandler
//   implements ICommandHandler<GenStoryImageCommand>
// {
//   constructor(
//     private queryBus: QueryBus,
//     private eventBus: EventBus,
//     private client: StabilityAiClient,
//   ) {}

//   async execute({ command }: GenStoryImageCommand) {
//     try {
//       const { id, imagePrompt } = command;

//       await this.queryBus.execute(
//         new UpdateStoryStatusQuery({
//           id,
//           log: StoryStatusLog.ImageInProgress,
//         }),
//       );

//       const {
//         artifacts: [image],
//       } = await this.client.sdxl.textToImage('stable-diffusion-xl-1024-v1-0', {
//         text_prompts: [
//           {
//             text: imagePrompt,
//           },
//         ],
//         samples: 1,
//         steps: 30,
//         width: 768,
//         height: 1344,
//       });

//       this.eventBus.publish(
//         new StoryImageGeneratedEvent({
//           id,
//           ...image,
//         }),
//       );
//     } catch (error) {
//       const { id } = command;

//       this.eventBus.publish(
//         new StoryGenerationFailedEvent({
//           id,
//           error: StoryStatusLog.StoryImageGenerationFailed,
//           message: error?.message,
//         }),
//       );
//     }
//   }
// }

@CommandHandler(GenStoryImageCommand)
export class GenStoryImageHandler
  implements ICommandHandler<GenStoryImageCommand>
{
  constructor(
    private queryBus: QueryBus,
    private eventBus: EventBus,
    private client: OnepAiClient,
  ) {}

  async execute({ command }: GenStoryImageCommand) {
    try {
      const { id, imagePrompt } = command;

      await this.queryBus.execute(
        new UpdateStoryStatusQuery({
          id,
          log: StoryStatusLog.ImageInProgress,
        }),
      );

      const {
        data: [image],
      } = await this.client.images.generate({
        prompt: `${imagePrompt}${IMAGE_STYLE}`,
        n: 1,
        size: '1024x1792',
        model: 'dall-e-3',
        quality: 'standard',
        response_format: 'b64_json',
      });

      console.log(image);

      this.eventBus.publish(
        new StoryImageGeneratedEvent({
          id,
          ...image,
        }),
      );
    } catch (error) {
      const { id } = command;

      this.eventBus.publish(
        new StoryGenerationFailedEvent({
          id,
          error: StoryStatusLog.StoryImageGenerationFailed,
          message: error?.message,
        }),
      );
    }
  }
}

// import OpenAI from "openai";
// import { render } from "micromustache";
// import { get } from "lodash";
// import { StoryExceptionCode } from "../../../../../Story.types";
// import { StoryException } from "../../services/StoryException";
// import { GenerateImageInput } from "./generateImage.types";

// export const generateImage = async ({
//   prompt: text,
//   illustration,
// }: GenerateImageInput) => {
//   try {
//     const client = new OpenAI();

//     const prompt = render(
//       text,
//       {
//         illustration,
//       },
//       {
//         tags: ["{{", "}}"],
//       }
//     );

//     const response = await client.images.generate({
//       prompt: prompt,
//       n: 1,
//       size: "1024x1792",
//       model: "dall-e-3",
//       quality: "standard",
//       response_format: "url",
//     });

//     const url = get(response, ["data", 0, "url"]);

//     if (url) {
//       return { url };
//     } else {
//       throw new StoryException({
//         message: "Fable image generation failed with no result",
//         code: StoryExceptionCode.StoryImageGenerationFailedWithNoResult,
//       });
//     }
//   } catch (error) {
//     if (error instanceof StoryException) throw error;
//     throw new StoryException({
//       reason: get(error, "message"),
//       message: "Fable image generation failed",
//       code: StoryExceptionCode.StoryImageGenerationFailed,
//     });
//   }
// };

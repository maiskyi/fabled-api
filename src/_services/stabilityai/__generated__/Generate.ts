/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  StableImageGenerateCoreCreateData,
  StableImageGenerateCoreCreateError,
  StableImageGenerateCoreCreatePayload,
  StableImageGenerateSd3CreateData,
  StableImageGenerateSd3CreateError,
  StableImageGenerateSd3CreatePayload,
  StableImageGenerateUltraCreateData,
  StableImageGenerateUltraCreateError,
  StableImageGenerateUltraCreatePayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Generate<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Our most advanced text to image generation service, Stable Image Ultra creates the highest quality images with unprecedented prompt understanding. Ultra excels in typography, complex compositions, dynamic lighting, vibrant hues, and overall cohesion and structure of an art piece. Made from the most advanced models, including Stable Diffusion 3.5, Ultra offers the best of the Stable Diffusion ecosystem. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=yXhs626oZdr1) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`.  The accept header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image in the format specified by the `output_format` parameter, but encoded to base64 in a JSON response. The only required parameter is the `prompt` field, which should contain the text prompt for the image generation. The body of the request should include: - `prompt` - text to generate the image from The body may optionally include: - `image` - the image to use as the starting point for the generation - `strength` - controls how much influence the `image` parameter has on the output image - `aspect_ratio` - the aspect ratio of the output image - `negative_prompt` - keywords of what you **do not** wish to see in the output image - `seed` - the randomness seed to use for the generation - `output_format` - the the format of the output image > **Note:** for the full list of optional parameters, please see the request schema below. ### Output The resolution of the generated image will be 1 megapixel. The default resolution is 1024x1024. ### Credits The Ultra service uses 8 credits per successful result. You will not be charged for failed results.
   *
   * @tags Generate
   * @name StableImageGenerateUltraCreate
   * @summary Stable Image Ultra
   * @request POST:/v2beta/stable-image/generate/ultra
   * @secure
   */
  stableImageGenerateUltraCreate = (data: StableImageGenerateUltraCreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageGenerateUltraCreateData, StableImageGenerateUltraCreateError>({
      path: `/v2beta/stable-image/generate/ultra`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Our primary service for text-to-image generation, Stable Image Core represents the best quality achievable at high speed. No prompt engineering is required! Try asking for a style, a scene, or a character, and see what you get. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=yXhs626oZdr1) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request should include: - `prompt` The body may optionally include: - `aspect_ratio` - `negative_prompt` - `seed` - `style_preset` - `output_format` > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image will be 1.5 megapixels. ### Credits Flat rate of 3 credits per successful generation.  You will not be charged for failed generations.
   *
   * @tags Generate
   * @name StableImageGenerateCoreCreate
   * @summary Stable Image Core
   * @request POST:/v2beta/stable-image/generate/core
   * @secure
   */
  stableImageGenerateCoreCreate = (data: StableImageGenerateCoreCreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageGenerateCoreCreateData, StableImageGenerateCoreCreateError>({
      path: `/v2beta/stable-image/generate/core`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Generate using Stable Diffusion 3.5 models, Stability AI latest base model: - **Stable Diffusion 3.5 Large**: At 8 billion parameters, with superior quality and prompt adherence, this base model is the most powerful in the Stable Diffusion family. This model is ideal for professional use cases at 1 megapixel resolution. - **Stable Diffusion 3.5 Large Turbo**: A distilled version of Stable Diffusion 3.5 Large. SD3.5 Large Turbo generates high-quality images with exceptional prompt adherence in just 4 steps, making it considerably faster than Stable Diffusion 3.5 Large. - **Stable Diffusion 3.5 Medium**: With 2.5 billion parameters, the model delivers an optimal balance between prompt accuracy and image quality, making it an efficient choice for fast high-performance image generation. Read more about the model capabilities [here](https://stability.ai/news/introducing-stable-diffusion-3-5). Stable Diffusion 3.0 models are also supported, powered by [Fireworks AI](https://fireworks.ai/). API status can be reviewed [here](https://readme.fireworks.ai/page/application-status). - **SD3 Large**: the 8 billion parameter model - **SD3 Large Turbo**: the 8 billion parameter model with a faster inference time - **SD3 Medium**: the 2 billion parameter model ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/SD3_API.ipynb) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`.  The accept header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. #### **Generating with a prompt** Commonly referred to as **text-to-image**, this mode generates an image from text alone. While the only required parameter is the `prompt`, it also supports an `aspect_ratio` parameter which can be used to control the aspect ratio of the generated image. #### **Generating with a prompt *and* an image** Commonly referred to as **image-to-image**, this mode also generates an image from text but uses an existing image as the starting point. The required parameters are: - `prompt` - text to generate the image from - `image` - the image to use as the starting point for the generation - `strength` - controls how much influence the `image` parameter has on the output image - `mode` - must be set to `image-to-image` > **Note:** maximum request size is 10MiB. #### **Optional Parameters:** Both modes support the following optional parameters: - `model` - the model to use (SD3.5 Large, SD3.5 Large Turbo, etc.) - `output_format` - the the format of the output image - `seed` - the randomness seed to use for the generation - `negative_prompt` - keywords of what you **do not** wish to see in the output image - `cfg_scale` - controls how strictly the diffusion process adheres to the prompt text - `style_preset` - guides the image model towards a particular style > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image will be 1MP. The default resolution is 1024x1024. ### Credits - **SD 3.5 & 3.0 Large**: Flat rate of 6.5 credits per successful generation. - **SD 3.5 & 3.0 Large Turbo**: Flat rate of 4 credits per successful generation. - **SD 3.5 & 3.0 Medium**: Flat rate of 3.5 credits per successful generation. As always, you will not be charged for failed generations.
   *
   * @tags Generate
   * @name StableImageGenerateSd3Create
   * @summary Stable Diffusion 3.0 & 3.5
   * @request POST:/v2beta/stable-image/generate/sd3
   * @secure
   */
  stableImageGenerateSd3Create = (data: StableImageGenerateSd3CreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageGenerateSd3CreateData, StableImageGenerateSd3CreateError>({
      path: `/v2beta/stable-image/generate/sd3`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
}

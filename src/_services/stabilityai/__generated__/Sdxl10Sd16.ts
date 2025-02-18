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

import { Error, Image, ImageToImageRequestBody, MaskingRequestBody, TextToImageRequestBody } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Sdxl10Sd16<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Generate an image from a text prompt. ### Using SDXL 1.0 Use `stable-diffusion-xl-1024-v1-0` as the `engine_id` of your request and pass in `height` & `width` as one of the following combinations: - 1024x1024 (default) - 1152x896 - 896x1152 - 1216x832 - 1344x768 - 768x1344 - 1536x640 - 640x1536 ### SDXL 1.0 Pricing When specifying 30 steps or fewer, generation costs 0.9 credits. When specifying above 30 steps, generation cost is determiend using the following formula: `cost = 0.9 * (steps / 30)` ### Using SD 1.6 SD1.6 is a flexible-resolution base model allowing you to generate non-standard aspect ratios. The model is optimized for a resolution of 512 x 512 pixels. To generate 1 megapixel outputs, we recommend using SDXL 1.0, which is available at the same price. Pass in `stable-diffusion-v1-6` as the `engine_id` of your request and ensure the `height` & `width` you pass in adhere to the following restrictions: - No dimension can be less than 320 pixels - No dimension can be greater than 1536 pixels - Height and width must be specified in increments of 64 - The default resolution is 512 x 512
   *
   * @tags SDXL 1.0 & SD1.6
   * @name TextToImage
   * @summary Text-to-image
   * @request POST:/v1/generation/{engine_id}/text-to-image
   * @secure
   */
  textToImage = (engineId: string, data: TextToImageRequestBody, params: RequestParams = {}) =>
    this.http.request<
      {
        artifacts?: Image[];
      },
      Error
    >({
      path: `/v1/generation/${engineId}/text-to-image`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Produce an image from an existing image using a text prompt. ### How to control strength of generation To preserve only roughly 35% of the initial image, pass in either `init_image_mode=IMAGE_STRENGTH` and `image_strength=0.35` or `init_image_mode=STEP_SCHEDULE` and `step_schedule_start=0.65`.  Both of these are equivalent, however `init_image_mode=STEP_SCHEDULE` also lets you pass in `step_schedule_end`, which can provide an extra level of control for those who need it.  For more details, see the specific fields below. > NOTE: Only **Version 1** engines will work with this endpoint.
   *
   * @tags SDXL 1.0 & SD1.6
   * @name ImageToImage
   * @summary Image-to-image with prompt
   * @request POST:/v1/generation/{engine_id}/image-to-image
   * @secure
   */
  imageToImage = (engineId: string, data: ImageToImageRequestBody, params: RequestParams = {}) =>
    this.http.request<
      {
        artifacts?: Image[];
      },
      Error
    >({
      path: `/v1/generation/${engineId}/image-to-image`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description Selectively modify portions of an image using a mask. The `mask` must be the same shape and size as the init image. This endpoint also supports `image` parameters with alpha channels.  See below for more details. > NOTE: Only **Version 1** engines will work with this endpoint.
   *
   * @tags SDXL 1.0 & SD1.6
   * @name Masking
   * @summary Image-to-image with a mask
   * @request POST:/v1/generation/{engine_id}/image-to-image/masking
   * @secure
   */
  masking = (engineId: string, data: MaskingRequestBody, params: RequestParams = {}) =>
    this.http.request<
      {
        artifacts?: Image[];
      },
      Error
    >({
      path: `/v1/generation/${engineId}/image-to-image/masking`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
}

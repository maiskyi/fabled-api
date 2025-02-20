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
  StableImageUpscaleConservativeCreateData,
  StableImageUpscaleConservativeCreateError,
  StableImageUpscaleConservativeCreatePayload,
  StableImageUpscaleCreativeCreateData,
  StableImageUpscaleCreativeCreateError,
  StableImageUpscaleCreativeCreatePayload,
  StableImageUpscaleFastCreateData,
  StableImageUpscaleFastCreateError,
  StableImageUpscaleFastCreatePayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Upscale<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Takes images between 64x64 and 1 megapixel and upscales them all the way to 4K resolution. Put more generally, it can upscale images ~20-40x times while preserving all aspects. Conservative Upscale minimizes alterations to the image and should not be used to reimagine an image. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=t1Q4w2uvvza0) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request must include: - `image` - `prompt` Optionally, the body of the request may also include: - `negative_prompt` - `seed` - `output_format` - `creativity` > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image will be 4 megapixels. ### Credits Flat rate of 25 credits per successful generation.  You will not be charged for failed generations.
   *
   * @tags Upscale
   * @name StableImageUpscaleConservativeCreate
   * @summary Conservative
   * @request POST:/v2beta/stable-image/upscale/conservative
   * @secure
   */
  stableImageUpscaleConservativeCreate = (
    data: StableImageUpscaleConservativeCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<StableImageUpscaleConservativeCreateData, StableImageUpscaleConservativeCreateError>({
      path: `/v2beta/stable-image/upscale/conservative`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Takes images between 64x64 and 1 megapixel and upscales them all the way to **4K** resolution.  Put more generally, it can upscale images ~20-40x times while preserving, and often enhancing, quality. Creative Upscale **works best on highly degraded images and is not for photos of 1mp or above** as it performs heavy reimagining (controlled by creativity scale). ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=QXxi9tfI425t) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`. The body of the request should include: - `image` - `prompt` The body may optionally include: - `seed` - `negative_prompt` - `output_format` - `creativity` - `style_preset` > **Note:** for more details about these parameters please see the request schema below. ### Results After invoking this endpoint with the required parameters, use the `id` in the response to poll for results at the [results/{id} endpoint](#tag/Results/paths/~1v2beta~1results~1%7Bid%7D/get).  Rate-limiting or other errors may occur if you poll more than once every 10 seconds. ### Credits Flat rate of 25 credits per successful generation.  You will not be charged for failed generations.
   *
   * @tags Upscale
   * @name StableImageUpscaleCreativeCreate
   * @summary Creative Upscale (async)
   * @request POST:/v2beta/stable-image/upscale/creative
   * @secure
   */
  stableImageUpscaleCreativeCreate = (data: StableImageUpscaleCreativeCreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageUpscaleCreativeCreateData, StableImageUpscaleCreativeCreateError>({
      path: `/v2beta/stable-image/upscale/creative`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Our Fast Upscaler service enhances image resolution by 4x using predictive and generative AI. This lightweight and fast service (processing in ~1 second) is ideal for enhancing the quality of compressed images, making it suitable for social media posts and other applications. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=t1Q4w2uvvza0) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request must include: - `image` Optionally, the body of the request may also include: - `output_format` > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image is 4 times that of the input image with a maximum size of 16 megapixels. ### Credits Flat rate of 1 credit per successful generation. You will not be charged for failed generations.
   *
   * @tags Upscale
   * @name StableImageUpscaleFastCreate
   * @summary Fast
   * @request POST:/v2beta/stable-image/upscale/fast
   * @secure
   */
  stableImageUpscaleFastCreate = (data: StableImageUpscaleFastCreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageUpscaleFastCreateData, StableImageUpscaleFastCreateError>({
      path: `/v2beta/stable-image/upscale/fast`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
}

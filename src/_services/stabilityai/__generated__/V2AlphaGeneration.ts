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
  GenerationID,
  GenerationImageToVideoCreateData,
  GenerationImageToVideoCreateError,
  GenerationImageToVideoResultDetailData,
  GenerationImageToVideoResultDetailError,
  GenerationStableImageInpaintCreateData,
  GenerationStableImageInpaintCreateError,
  GenerationStableImageInpaintCreatePayload,
  GenerationStableImageUpscaleCreateData,
  GenerationStableImageUpscaleCreateError,
  GenerationStableImageUpscaleCreatePayload,
  GenerationStableImageUpscaleResultDetailData,
  GenerationStableImageUpscaleResultDetailError,
  ImageToVideoRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class V2AlphaGeneration<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Generate a short video based on an initial image with [Stable Video Diffusion](https://static1.squarespace.com/static/6213c340453c3f502425776e/t/655ce779b9d47d342a93c890/1700587395994/stable_video_diffusion.pdf), a latent video diffusion model. ### How to generate a video Video generations are asynchronous, so after starting a generation use the `id` returned in the response to poll [/v2alpha/generation/image-to-video/result/{id}](#tag/v2alphageneration/paths/~1v2alpha~1generation~1image-to-video~1result~1%7Bid%7D/get) for results. ### Price Flat rate of 20 cents per generation.
   *
   * @tags v2alpha/generation
   * @name GenerationImageToVideoCreate
   * @summary image-to-video
   * @request POST:/v2alpha/generation/image-to-video
   * @secure
   */
  generationImageToVideoCreate = (data: ImageToVideoRequest, params: RequestParams = {}) =>
    this.http.request<GenerationImageToVideoCreateData, GenerationImageToVideoCreateError>({
      path: `/v2alpha/generation/image-to-video`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Fetch the result of an image-to-video generation by ID. Make sure you use the same API key that you used to generate the video, otherwise you will receive a `404` response. ### How is progress reported? Your generation is either `in-progress` (i.e. status code `202`) or it is complete (i.e. status code `200`). We may add more fine-grained progress reporting in the future (e.g. a numerical progress). ### How long are results stored? Results are stored for 24 hours after generation. After that, the results are deleted and you will need to re-generate your video.
   *
   * @tags v2alpha/generation
   * @name GenerationImageToVideoResultDetail
   * @summary image-to-video/result
   * @request GET:/v2alpha/generation/image-to-video/result/{id}
   * @secure
   */
  generationImageToVideoResultDetail = (id: GenerationID, params: RequestParams = {}) =>
    this.http.request<GenerationImageToVideoResultDetailData, GenerationImageToVideoResultDetailError>({
      path: `/v2alpha/generation/image-to-video/result/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Takes images between 64x64 and 1 megapixel and upscales them all the way to **4K** resolution.  Put more generally, it can upscale images ~20-40x times while preserving, and often enhancing, quality. ### How to use - Invoke this endpoint with the required parameters to start a generation - Use that `id` in the response to poll for results at the [upscale/result/{id}](#tag/v2alphageneration/paths/~1v2alpha~1generation~1stable-image~1upscale~1result~1%7Bid%7D/get) endpoint - Rate-limiting or other errors may occur if you poll more than once every 10 seconds ### Price Flat rate of 25 cents per generation.
   *
   * @tags v2alpha/generation
   * @name GenerationStableImageUpscaleCreate
   * @summary stable-image/upscale
   * @request POST:/v2alpha/generation/stable-image/upscale
   * @secure
   */
  generationStableImageUpscaleCreate = (data: GenerationStableImageUpscaleCreatePayload, params: RequestParams = {}) =>
    this.http.request<GenerationStableImageUpscaleCreateData, GenerationStableImageUpscaleCreateError>({
      path: `/v2alpha/generation/stable-image/upscale`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Fetch the result of an upscale generation by ID. Make sure to use the same API key to fetch the generation result that you used to create the generation, otherwise you will receive a `404` response. ### How is progress reported? Your generation is either `in-progress` (i.e. status code `202`) or it is complete (i.e. status code `200`). We may add more fine-grained progress reporting in the future (e.g. a numerical progress). ### How long are results stored? Results are stored for 24 hours after generation. After that, the results are deleted.
   *
   * @tags v2alpha/generation
   * @name GenerationStableImageUpscaleResultDetail
   * @summary stable-image/upscale/result
   * @request GET:/v2alpha/generation/stable-image/upscale/result/{id}
   * @secure
   */
  generationStableImageUpscaleResultDetail = (id: GenerationID, params: RequestParams = {}) =>
    this.http.request<GenerationStableImageUpscaleResultDetailData, GenerationStableImageUpscaleResultDetailError>({
      path: `/v2alpha/generation/stable-image/upscale/result/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Inpaint an existing image, with or without a mask, using our latest-and-greatest inpainting model. ### Search-and-Replace Mode This mode is ideal for individuals of all levels of skill in design. It can be used for straightforward adjustments to images. The service will automatically mask the most appropriate object based on the contents of the `search_prompt`, and replace it with a generated result based on the `prompt`. **How to use:** set the `mode` parameter to `search` and provide a short description of what to search-and-replace in the `search_prompt` parameter. ### Mask Mode This mode allows for precise control of generative fill tasks on an image, down to the level of individual pixels. Design professionals can provide a `mask` for the section of the image to be replaced, and use standard image prompting to describe the full image as it should appear after the editing. The resulting image will incorporate all of the elements described in the `prompt`. **How to use:** set the `mode` parameter to `mask` and either pass in an `image` with an alpha channel or provide an explicit mask image to the `mask` parameter. If both are present the `mask` parameter will take precedence. ### Price - Requests with `mode` set to `search` cost 4 cents. - Requests with `mode` set to `mask` cost 3 cents.
   *
   * @tags v2alpha/generation
   * @name GenerationStableImageInpaintCreate
   * @summary stable-image/inpaint
   * @request POST:/v2alpha/generation/stable-image/inpaint
   * @secure
   */
  generationStableImageInpaintCreate = (data: GenerationStableImageInpaintCreatePayload, params: RequestParams = {}) =>
    this.http.request<GenerationStableImageInpaintCreateData, GenerationStableImageInpaintCreateError>({
      path: `/v2alpha/generation/stable-image/inpaint`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
}

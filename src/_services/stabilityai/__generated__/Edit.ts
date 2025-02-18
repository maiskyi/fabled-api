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
  StableImageEditEraseCreateData,
  StableImageEditEraseCreateError,
  StableImageEditEraseCreatePayload,
  StableImageEditInpaintCreateData,
  StableImageEditInpaintCreateError,
  StableImageEditInpaintCreatePayload,
  StableImageEditOutpaintCreateData,
  StableImageEditOutpaintCreateError,
  StableImageEditOutpaintCreatePayload,
  StableImageEditRemoveBackgroundCreateData,
  StableImageEditRemoveBackgroundCreateError,
  StableImageEditRemoveBackgroundCreatePayload,
  StableImageEditReplaceBackgroundAndRelightCreateData,
  StableImageEditReplaceBackgroundAndRelightCreateError,
  StableImageEditReplaceBackgroundAndRelightCreatePayload,
  StableImageEditSearchAndRecolorCreateData,
  StableImageEditSearchAndRecolorCreateError,
  StableImageEditSearchAndRecolorCreatePayload,
  StableImageEditSearchAndReplaceCreateData,
  StableImageEditSearchAndReplaceCreateError,
  StableImageEditSearchAndReplaceCreatePayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Edit<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description The Erase service removes unwanted objects, such as blemishes on portraits or items on desks, using image masks. The mask is provided in one of two ways: 1. Explicitly passing in a separate image via the `mask` parameter 2. Derived from the alpha channel of the `image` parameter. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=t1Q4w2uvvza0) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request must include: - `image` Optionally, the body of the request may also include: - `mask` - `seed` - `output_format` > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image will be 4 megapixels. ### Credits Flat rate of 3 credits per successful generation.  You will not be charged for failed generations.
   *
   * @tags Edit
   * @name StableImageEditEraseCreate
   * @summary Erase
   * @request POST:/v2beta/stable-image/edit/erase
   * @secure
   */
  stableImageEditEraseCreate = (data: StableImageEditEraseCreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageEditEraseCreateData, StableImageEditEraseCreateError>({
      path: `/v2beta/stable-image/edit/erase`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Intelligently modify images by filling in or replacing specified areas with new content based on the content of a "mask" image. The "mask" is provided in one of two ways: 1. Explicitly passing in a separate image via the `mask` parameter 2. Derived from the alpha channel of the `image` parameter. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=t1Q4w2uvvza0) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request must include: - `image` - `prompt` Optionally, the body of the request may also include: - `mask` - `negative_prompt` - `seed` - `output_format` - `style_preset` > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image will be 4 megapixels. ### Credits Flat rate of 3 credits per successful generation.  You will not be charged for failed generations.
   *
   * @tags Edit
   * @name StableImageEditInpaintCreate
   * @summary Inpaint
   * @request POST:/v2beta/stable-image/edit/inpaint
   * @secure
   */
  stableImageEditInpaintCreate = (data: StableImageEditInpaintCreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageEditInpaintCreateData, StableImageEditInpaintCreateError>({
      path: `/v2beta/stable-image/edit/inpaint`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description The Outpaint service inserts additional content in an image to fill in the space in any direction. Compared to other automated or manual attempts to expand the content in an image, the Outpaint service should minimize artifacts and signs that the original image has been edited. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=bZ2yK7VQSgLw) ### How to use Please invoke this endpoint with a POST request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request must include: - `image` Along with _at least one_ outpaint direction: - `left` - `right` - `up` - `down` > **Note:** for best quality use outpaint direction values smaller or equal to your source image dimensions. Each of these parameters should be set to a number between 0 and 2000, representing the number of pixels to outpaint in that direction. Optionally, the body of the request may also include: - `prompt` - `seed` - `output_format` - `creativity` - `style_preset` > **Note:** for more details about these parameters please see the request schema below. ### Credits Flat rate of 4 credits per successful generation.  You will not be charged for failed generations.
   *
   * @tags Edit
   * @name StableImageEditOutpaintCreate
   * @summary Outpaint
   * @request POST:/v2beta/stable-image/edit/outpaint
   * @secure
   */
  stableImageEditOutpaintCreate = (data: StableImageEditOutpaintCreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageEditOutpaintCreateData, StableImageEditOutpaintCreateError>({
      path: `/v2beta/stable-image/edit/outpaint`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description The Search and Replace service is a specific version of inpainting that does not require a mask. Instead, users can leverage a `search_prompt` to identify an object in simple language to be replaced. The service will automatically segment the object and replace it with the object requested in the prompt. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=0lDpGa2jAmAs) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request should include: - `image` - `prompt` - `search_prompt` The body may optionally include: - `seed` - `negative_prompt` - `output_format` - `style_preset` > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image will be 4 megapixels. ### Credits Flat rate of 4 credits per successful generation.  You will not be charged for failed generations.
   *
   * @tags Edit
   * @name StableImageEditSearchAndReplaceCreate
   * @summary Search and Replace
   * @request POST:/v2beta/stable-image/edit/search-and-replace
   * @secure
   */
  stableImageEditSearchAndReplaceCreate = (
    data: StableImageEditSearchAndReplaceCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<StableImageEditSearchAndReplaceCreateData, StableImageEditSearchAndReplaceCreateError>({
      path: `/v2beta/stable-image/edit/search-and-replace`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description The Search and Recolor service provides the ability to change the color of a specific object in an image using a prompt. This service is a specific version of inpainting that does not require a mask. The Search and Recolor service will automatically segment the object and recolor it using the colors requested in the prompt. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=mtgSh4Stj3l) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request should include: - `image` - `prompt` - `select_prompt` The body may optionally include: - `grow_mask` - `seed` - `negative_prompt` - `output_format` - `style_preset` > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image will match the resolution of the input image. ### Credits Flat rate of 5 credits per successful generation.  You will not be charged for failed generations.
   *
   * @tags Edit
   * @name StableImageEditSearchAndRecolorCreate
   * @summary Search and Recolor
   * @request POST:/v2beta/stable-image/edit/search-and-recolor
   * @secure
   */
  stableImageEditSearchAndRecolorCreate = (
    data: StableImageEditSearchAndRecolorCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<StableImageEditSearchAndRecolorCreateData, StableImageEditSearchAndRecolorCreateError>({
      path: `/v2beta/stable-image/edit/search-and-recolor`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description The Remove Background service accurately segments the foreground from an image and implements and removes the background. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=VHofb3LAVmqi) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request must include: - `image` Optionally, the body of the request may also include: - `output_format` > **Note:** for more details about these parameters please see the request schema below. ### Credits Flat rate of 2 credits per successful generation.  You will not be charged for failed generations.
   *
   * @tags Edit
   * @name StableImageEditRemoveBackgroundCreate
   * @summary Remove Background
   * @request POST:/v2beta/stable-image/edit/remove-background
   * @secure
   */
  stableImageEditRemoveBackgroundCreate = (
    data: StableImageEditRemoveBackgroundCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<StableImageEditRemoveBackgroundCreateData, StableImageEditRemoveBackgroundCreateError>({
      path: `/v2beta/stable-image/edit/remove-background`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description The Replace Background and Relight edit service lets users swap backgrounds with AI-generated or uploaded images while adjusting lighting to match the subject. This new API provides a streamlined image editing solution and can serve e-commerce, real estate, photography, and creative projects. Some of the things you can do include: - Background Replacement: Remove existing background and add new ones. - AI Background Generation: Create new backgrounds using AI generated images based on prompts. - Relighting: Adjust lighting in images that are under or overexposed. - Flexible Inputs: Use your own background image or generate one. - Lighting Adjustments: Modify light reference, direction, and strength. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=mtgSh4Stj3l) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`. The body of the request should include: - `subject_image` - `background_prompt` and/or `background_reference` The body may optionally include: - `light_reference` or `light_source_direction` - `light_source_strength` (requires `light_reference` or `light_source_direction`) - `foreground_prompt` - `negative_prompt` - `preserve_original_subject` - `original_background_depth` - `keep_original_background` - `light_source_strength` - `seed` - `output_format` > **Note:** for more details about these parameters please see the request schema below. ### Results After invoking this endpoint with the required parameters, use the `id` in the response to poll for results at the [results/{id} endpoint](#tag/Results/paths/~1v2beta~1results~1%7Bid%7D/get).  Rate-limiting or other errors may occur if you poll more than once every 10 seconds. ### Credits Flat rate of 8 credits per successful generation. You will not be charged for failed generations.
   *
   * @tags Edit
   * @name StableImageEditReplaceBackgroundAndRelightCreate
   * @summary Replace Background and Relight (async)
   * @request POST:/v2beta/stable-image/edit/replace-background-and-relight
   * @secure
   */
  stableImageEditReplaceBackgroundAndRelightCreate = (
    data: StableImageEditReplaceBackgroundAndRelightCreatePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      StableImageEditReplaceBackgroundAndRelightCreateData,
      StableImageEditReplaceBackgroundAndRelightCreateError
    >({
      path: `/v2beta/stable-image/edit/replace-background-and-relight`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
}

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
  StableImageControlSketchCreateData,
  StableImageControlSketchCreateError,
  StableImageControlSketchCreatePayload,
  StableImageControlStructureCreateData,
  StableImageControlStructureCreateError,
  StableImageControlStructureCreatePayload,
  StableImageControlStyleCreateData,
  StableImageControlStyleCreateError,
  StableImageControlStyleCreatePayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Control<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This service offers an ideal solution for design projects that require brainstorming and frequent iterations. It upgrades rough hand-drawn sketches to refined outputs with precise control. For non-sketch images, it allows detailed manipulation of the final appearance by leveraging the contour lines and edges within the image. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=ZKIAqHzJzzUo) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request should include: - `image` - `prompt` The body may optionally include: - `control_strength` - `negative_prompt` - `seed` - `output_format` - `style_preset` > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image will match that of the input image. ### Credits Flat rate of 3 credits per successful generation. You will not be charged for failed generations.
   *
   * @tags Control
   * @name StableImageControlSketchCreate
   * @summary Sketch
   * @request POST:/v2beta/stable-image/control/sketch
   * @secure
   */
  stableImageControlSketchCreate = (data: StableImageControlSketchCreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageControlSketchCreateData, StableImageControlSketchCreateError>({
      path: `/v2beta/stable-image/control/sketch`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description This service excels in generating images by maintaining the structure of an input image, making it especially valuable for advanced content creation scenarios such as recreating scenes or rendering characters from models. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=59RaZazXz0AU) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request should include: - `image` - `prompt` The body may optionally include: - `control_strength` - `negative_prompt` - `seed` - `output_format` - `style_preset` > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image will match that of the input image. ### Credits Flat rate of 3 credits per successful generation. You will not be charged for failed generations.
   *
   * @tags Control
   * @name StableImageControlStructureCreate
   * @summary Structure
   * @request POST:/v2beta/stable-image/control/structure
   * @secure
   */
  stableImageControlStructureCreate = (data: StableImageControlStructureCreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageControlStructureCreateData, StableImageControlStructureCreateError>({
      path: `/v2beta/stable-image/control/structure`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description This service extracts stylistic elements from an input image (control image) and uses it to guide the creation of an output image based on the prompt. The result is a new image in the same style as the control image. ### Try it out Grab your [API key](https://platform.stability.ai/account/keys) and head over to [![Open Google Colab](https://platform.stability.ai/svg/google-colab.svg)](https://colab.research.google.com/github/stability-ai/stability-sdk/blob/main/nbs/Stable_Image_API_Public.ipynb#scrollTo=y0WKjG72RvTE) ### How to use Please invoke this endpoint with a `POST` request. The headers of the request must include an API key in the `authorization` field. The body of the request must be `multipart/form-data`, and the `accept` header should be set to one of the following: - `image/*` to receive the image in the format specified by the `output_format` parameter. - `application/json` to receive the image encoded as base64 in a JSON response. The body of the request should include: - `image` - `prompt` The body may optionally include: - `negative_prompt` - `aspect_ratio` - `fidelity` - `seed` - `output_format` - `style_preset` > **Note:** for more details about these parameters please see the request schema below. ### Output The resolution of the generated image will be 1MP. The default resolution is 1024x1024. ### Credits Flat rate of 4 credits per successful generation. You will not be charged for failed generations.
   *
   * @tags Control
   * @name StableImageControlStyleCreate
   * @summary Style
   * @request POST:/v2beta/stable-image/control/style
   * @secure
   */
  stableImageControlStyleCreate = (data: StableImageControlStyleCreatePayload, params: RequestParams = {}) =>
    this.http.request<StableImageControlStyleCreateData, StableImageControlStyleCreateError>({
      path: `/v2beta/stable-image/control/style`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
}

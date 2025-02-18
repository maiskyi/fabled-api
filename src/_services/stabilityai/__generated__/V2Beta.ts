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
  StableImageUpscaleCreativeResultDetailData,
  StableImageUpscaleCreativeResultDetailError,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class V2Beta<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Fetch the result of an upscale generation by ID. Make sure to use the same API key to fetch the generation result that you used to create the generation, otherwise you will receive a `404` response. ### How to use Please invoke this endpoint with a `GET` request. The headers of the request must include an API key in the `authorization` field and the ID of your generation must be in the path. ### How is progress reported? Your generation is either `in-progress` (i.e. status code `202`) or it is complete (i.e. status code `200`). We may add more fine-grained progress reporting in the future (e.g. a numerical progress). ### How long are results stored? Results are stored for 24 hours after generation. After that, the results are deleted.
   *
   * @name StableImageUpscaleCreativeResultDetail
   * @summary Fetch Creative Upscale result
   * @request GET:/v2beta/stable-image/upscale/creative/result/{id}
   * @secure
   */
  stableImageUpscaleCreativeResultDetail = (id: GenerationID, params: RequestParams = {}) =>
    this.http.request<StableImageUpscaleCreativeResultDetailData, StableImageUpscaleCreativeResultDetailError>({
      path: `/v2beta/stable-image/upscale/creative/result/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}

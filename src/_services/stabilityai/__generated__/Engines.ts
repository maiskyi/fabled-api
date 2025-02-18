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

import { Error, ListEnginesData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Engines<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description List all engines available to your organization/user
   *
   * @tags Engines
   * @name ListEngines
   * @summary List engines
   * @request GET:/v1/engines/list
   * @secure
   */
  listEngines = (params: RequestParams = {}) =>
    this.http.request<ListEnginesData, Error>({
      path: `/v1/engines/list`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}

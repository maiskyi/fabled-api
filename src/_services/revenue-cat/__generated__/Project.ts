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

import { Error, ListProjectsData, ListProjectsParams } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Project<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:projects:read</code>.
   *
   * @tags Project
   * @name ListProjects
   * @summary Get a list of projects
   * @request GET:/projects
   * @secure
   */
  listProjects = (query: ListProjectsParams, params: RequestParams = {}) =>
    this.http.request<
      ListProjectsData,
      | (Error & {
          type?: 'parameter_error' | 'invalid_request';
        })
      | (Error & {
          type?: 'authentication_error';
        })
      | (Error & {
          type?: 'authorization_error';
        })
      | (Error & {
          type?: 'resource_missing';
        })
      | (Error & {
          type?: 'rate_limit_error';
        })
      | (Error & {
          type?: 'server_error';
        })
    >({
      path: `/projects`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}

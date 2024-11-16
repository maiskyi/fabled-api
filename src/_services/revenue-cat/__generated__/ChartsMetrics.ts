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

import { Error, GetOverviewMetricsData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class ChartsMetrics<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>charts_metrics:overview:read</code>.
   *
   * @tags Charts & Metrics
   * @name GetOverviewMetrics
   * @summary Get overview metrics for a project
   * @request GET:/projects/{project_id}/metrics/overview
   * @secure
   */
  getOverviewMetrics = (projectId: string, params: RequestParams = {}) =>
    this.http.request<
      GetOverviewMetricsData,
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
      path: `/projects/${projectId}/metrics/overview`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}

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
  AppCreate,
  CreateAppData,
  DeleteAppData,
  Error,
  GetAppData,
  ListAppsData,
  ListAppsParams,
  UpdateAppData,
  UpdateAppPayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class App<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:apps:read</code>.
   *
   * @tags App
   * @name ListApps
   * @summary Get a list of apps
   * @request GET:/projects/{project_id}/apps
   * @secure
   */
  listApps = ({ projectId, ...query }: ListAppsParams, params: RequestParams = {}) =>
    this.http.request<
      ListAppsData,
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
      path: `/projects/${projectId}/apps`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:apps:read_write</code>.
   *
   * @tags App
   * @name CreateApp
   * @summary Create an App
   * @request POST:/projects/{project_id}/apps
   * @secure
   */
  createApp = (projectId: string, data: AppCreate, params: RequestParams = {}) =>
    this.http.request<
      CreateAppData,
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
          type?: 'resource_already_exists' | 'idempotency_error';
        })
      | (Error & {
          type?: 'unprocessable_entity_error' | 'parameter_error' | 'store_error';
        })
      | (Error & {
          type?: 'resource_locked_error';
        })
      | (Error & {
          type?: 'rate_limit_error';
        })
      | (Error & {
          type?: 'server_error';
        })
    >({
      path: `/projects/${projectId}/apps`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:apps:read</code>.
   *
   * @tags App
   * @name GetApp
   * @summary Get an app
   * @request GET:/projects/{project_id}/apps/{app_id}
   * @secure
   */
  getApp = (projectId: string, appId: string, params: RequestParams = {}) =>
    this.http.request<
      GetAppData,
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
      path: `/projects/${projectId}/apps/${appId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:apps:read_write</code>.
   *
   * @tags App
   * @name UpdateApp
   * @summary Update an app
   * @request POST:/projects/{project_id}/apps/{app_id}
   * @secure
   */
  updateApp = (projectId: string, appId: string, data: UpdateAppPayload, params: RequestParams = {}) =>
    this.http.request<
      UpdateAppData,
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
          type?: 'resource_already_exists' | 'idempotency_error';
        })
      | (Error & {
          type?: 'unprocessable_entity_error' | 'parameter_error' | 'store_error';
        })
      | (Error & {
          type?: 'resource_locked_error';
        })
      | (Error & {
          type?: 'rate_limit_error';
        })
      | (Error & {
          type?: 'server_error';
        })
    >({
      path: `/projects/${projectId}/apps/${appId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:apps:read_write</code>.
   *
   * @tags App
   * @name DeleteApp
   * @summary Delete an app
   * @request DELETE:/projects/{project_id}/apps/{app_id}
   * @secure
   */
  deleteApp = (projectId: string, appId: string, params: RequestParams = {}) =>
    this.http.request<
      DeleteAppData,
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
          type?: 'resource_already_exists' | 'idempotency_error';
        })
      | (Error & {
          type?: 'unprocessable_entity_error' | 'parameter_error' | 'store_error';
        })
      | (Error & {
          type?: 'resource_locked_error';
        })
      | (Error & {
          type?: 'rate_limit_error';
        })
      | (Error & {
          type?: 'server_error';
        })
    >({
      path: `/projects/${projectId}/apps/${appId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
}

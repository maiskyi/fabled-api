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
  CreateOfferingData,
  CreateOfferingPayload,
  DeleteOfferingData,
  Error,
  GetOfferingData,
  GetOfferingParams,
  ListOfferingsData,
  ListOfferingsParams,
  UpdateOfferingData,
  UpdateOfferingPayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Offering<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:offerings:read</code>.
   *
   * @tags Offering
   * @name GetOffering
   * @summary Get an offering
   * @request GET:/projects/{project_id}/offerings/{offering_id}
   * @secure
   */
  getOffering = ({ projectId, offeringId, ...query }: GetOfferingParams, params: RequestParams = {}) =>
    this.http.request<
      GetOfferingData,
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
      path: `/projects/${projectId}/offerings/${offeringId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:offerings:read_write</code>.
   *
   * @tags Offering
   * @name UpdateOffering
   * @summary Update an offering
   * @request POST:/projects/{project_id}/offerings/{offering_id}
   * @secure
   */
  updateOffering = (projectId: string, offeringId: string, data: UpdateOfferingPayload, params: RequestParams = {}) =>
    this.http.request<
      UpdateOfferingData,
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
      path: `/projects/${projectId}/offerings/${offeringId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:offerings:read_write</code>.
   *
   * @tags Offering
   * @name DeleteOffering
   * @summary Delete an offering and its attached packages
   * @request DELETE:/projects/{project_id}/offerings/{offering_id}
   * @secure
   */
  deleteOffering = (projectId: string, offeringId: string, params: RequestParams = {}) =>
    this.http.request<
      DeleteOfferingData,
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
      path: `/projects/${projectId}/offerings/${offeringId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:offerings:read</code>.
   *
   * @tags Offering
   * @name ListOfferings
   * @summary Get a list of offerings
   * @request GET:/projects/{project_id}/offerings
   * @secure
   */
  listOfferings = ({ projectId, ...query }: ListOfferingsParams, params: RequestParams = {}) =>
    this.http.request<
      ListOfferingsData,
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
      path: `/projects/${projectId}/offerings`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:offerings:read_write</code>.
   *
   * @tags Offering
   * @name CreateOffering
   * @summary Create an offering
   * @request POST:/projects/{project_id}/offerings
   * @secure
   */
  createOffering = (projectId: string, data: CreateOfferingPayload, params: RequestParams = {}) =>
    this.http.request<
      CreateOfferingData,
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
      path: `/projects/${projectId}/offerings`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}

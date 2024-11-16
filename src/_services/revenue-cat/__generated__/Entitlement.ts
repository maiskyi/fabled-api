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
  AttachProductsToEntitlementData,
  AttachProductsToEntitlementPayload,
  CreateEntitlementData,
  CreateEntitlementPayload,
  DeleteEntitlementData,
  DetachProductsFromEntitlementData,
  DetachProductsFromEntitlementPayload,
  Error,
  GetEntitlementData,
  GetEntitlementParams,
  GetProductsFromEntitlementData,
  GetProductsFromEntitlementParams,
  ListEntitlementsData,
  ListEntitlementsParams,
  UpdateEntitlementData,
  UpdateEntitlementPayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Entitlement<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:entitlements:read</code>.
   *
   * @tags Entitlement
   * @name GetEntitlement
   * @summary Get an entitlement
   * @request GET:/projects/{project_id}/entitlements/{entitlement_id}
   * @secure
   */
  getEntitlement = ({ projectId, entitlementId, ...query }: GetEntitlementParams, params: RequestParams = {}) =>
    this.http.request<
      GetEntitlementData,
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
      path: `/projects/${projectId}/entitlements/${entitlementId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:entitlements:read_write</code>.
   *
   * @tags Entitlement
   * @name UpdateEntitlement
   * @summary Update an entitlement
   * @request POST:/projects/{project_id}/entitlements/{entitlement_id}
   * @secure
   */
  updateEntitlement = (
    projectId: string,
    entitlementId: string,
    data: UpdateEntitlementPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      UpdateEntitlementData,
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
      path: `/projects/${projectId}/entitlements/${entitlementId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:entitlements:read_write</code>.
   *
   * @tags Entitlement
   * @name DeleteEntitlement
   * @summary Delete an entitlement
   * @request DELETE:/projects/{project_id}/entitlements/{entitlement_id}
   * @secure
   */
  deleteEntitlement = (projectId: string, entitlementId: string, params: RequestParams = {}) =>
    this.http.request<
      DeleteEntitlementData,
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
      path: `/projects/${projectId}/entitlements/${entitlementId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:entitlements:read</code>.
   *
   * @tags Entitlement
   * @name ListEntitlements
   * @summary Get a list of entitlements
   * @request GET:/projects/{project_id}/entitlements
   * @secure
   */
  listEntitlements = ({ projectId, ...query }: ListEntitlementsParams, params: RequestParams = {}) =>
    this.http.request<
      ListEntitlementsData,
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
      path: `/projects/${projectId}/entitlements`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:entitlements:read_write</code>.
   *
   * @tags Entitlement
   * @name CreateEntitlement
   * @summary Create an entitlement
   * @request POST:/projects/{project_id}/entitlements
   * @secure
   */
  createEntitlement = (projectId: string, data: CreateEntitlementPayload, params: RequestParams = {}) =>
    this.http.request<
      CreateEntitlementData,
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
      path: `/projects/${projectId}/entitlements`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:entitlements:read</code>.
   *
   * @tags Entitlement
   * @name GetProductsFromEntitlement
   * @summary Get a list of products attached to a given entitlement
   * @request GET:/projects/{project_id}/entitlements/{entitlement_id}/products
   * @secure
   */
  getProductsFromEntitlement = (
    { projectId, entitlementId, ...query }: GetProductsFromEntitlementParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      GetProductsFromEntitlementData,
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
      path: `/projects/${projectId}/entitlements/${entitlementId}/products`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:entitlements:read_write</code>.
   *
   * @tags Entitlement
   * @name AttachProductsToEntitlement
   * @summary Attach a set of products to an entitlement
   * @request POST:/projects/{project_id}/entitlements/{entitlement_id}/actions/attach_products
   * @secure
   */
  attachProductsToEntitlement = (
    projectId: string,
    entitlementId: string,
    data: AttachProductsToEntitlementPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AttachProductsToEntitlementData,
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
      path: `/projects/${projectId}/entitlements/${entitlementId}/actions/attach_products`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:entitlements:read_write</code>.
   *
   * @tags Entitlement
   * @name DetachProductsFromEntitlement
   * @summary Detach a set of product from an entitlement
   * @request POST:/projects/{project_id}/entitlements/{entitlement_id}/actions/detach_products
   * @secure
   */
  detachProductsFromEntitlement = (
    projectId: string,
    entitlementId: string,
    data: DetachProductsFromEntitlementPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DetachProductsFromEntitlementData,
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
      path: `/projects/${projectId}/entitlements/${entitlementId}/actions/detach_products`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}

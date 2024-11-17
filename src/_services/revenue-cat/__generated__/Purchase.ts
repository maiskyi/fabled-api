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
  Error,
  GetPurchaseData,
  ListPurchaseEntitlementsData,
  ListPurchaseEntitlementsParams,
  RefundPurchaseData,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Purchase<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:purchases:read</code>.
   *
   * @tags Purchase
   * @name GetPurchase
   * @summary Get a purchase
   * @request GET:/projects/{project_id}/purchases/{purchase_id}
   * @secure
   */
  getPurchase = (projectId: string, purchaseId: string, params: RequestParams = {}) =>
    this.http.request<
      GetPurchaseData,
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
      path: `/projects/${projectId}/purchases/${purchaseId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Lists all Entitlements granted by a Purchase. This endpoint requires the following permission(s): <code>customer_information:purchases:read</code>.
   *
   * @tags Purchase
   * @name ListPurchaseEntitlements
   * @summary Get a list of entitlements associated with a purchase
   * @request GET:/projects/{project_id}/purchases/{purchase_id}/entitlements
   * @secure
   */
  listPurchaseEntitlements = (
    { projectId, purchaseId, ...query }: ListPurchaseEntitlementsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ListPurchaseEntitlementsData,
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
      path: `/projects/${projectId}/purchases/${purchaseId}/entitlements`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Refund a RevenueCat Billing purchase and revoke access to associated granted entitlements. This endpoint requires the following permission(s): <code>customer_information:purchases:read_write</code>.
   *
   * @tags Purchase
   * @name RefundPurchase
   * @summary Refund a RevenueCat Billing purchase
   * @request POST:/projects/{project_id}/purchases/{purchase_id}/actions/refund
   * @secure
   */
  refundPurchase = (projectId: string, purchaseId: string, params: RequestParams = {}) =>
    this.http.request<
      RefundPurchaseData,
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
      path: `/projects/${projectId}/purchases/${purchaseId}/actions/refund`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
}

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
  CancelSubscriptionData,
  Error,
  GetSubscriptionData,
  ListSubscriptionEntitlementsData,
  ListSubscriptionEntitlementsParams,
  RefundSubscriptionData,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Subscription<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:subscriptions:read</code>.
   *
   * @tags Subscription
   * @name GetSubscription
   * @summary Get a subscription
   * @request GET:/projects/{project_id}/subscriptions/{subscription_id}
   * @secure
   */
  getSubscription = (projectId: string, subscriptionId: string, params: RequestParams = {}) =>
    this.http.request<
      GetSubscriptionData,
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
      path: `/projects/${projectId}/subscriptions/${subscriptionId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Lists all Entitlements granted by a Subscription. This endpoint requires the following permission(s): <code>customer_information:subscriptions:read</code>.
   *
   * @tags Subscription
   * @name ListSubscriptionEntitlements
   * @summary Get a list of entitlements associated with a subscription
   * @request GET:/projects/{project_id}/subscriptions/{subscription_id}/entitlements
   * @secure
   */
  listSubscriptionEntitlements = (
    { projectId, subscriptionId, ...query }: ListSubscriptionEntitlementsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ListSubscriptionEntitlementsData,
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
      path: `/projects/${projectId}/subscriptions/${subscriptionId}/entitlements`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Cancel an active RevenueCat Billing subscription. The customer will lose access to the associated entitlements at the end of the current period. This endpoint requires the following permission(s): <code>customer_information:subscriptions:read_write</code>.
   *
   * @tags Subscription
   * @name CancelSubscription
   * @summary Cancel an active RevenueCat Billing subscription
   * @request POST:/projects/{project_id}/subscriptions/{subscription_id}/actions/cancel
   * @secure
   */
  cancelSubscription = (projectId: string, subscriptionId: string, params: RequestParams = {}) =>
    this.http.request<
      CancelSubscriptionData,
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
      path: `/projects/${projectId}/subscriptions/${subscriptionId}/actions/cancel`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Cancel a RevenueCat Billing subscription by refunding the most recent payment. The customer will immediately lose access to the associated entitlements. This endpoint requires the following permission(s): <code>customer_information:subscriptions:read_write</code>.
   *
   * @tags Subscription
   * @name RefundSubscription
   * @summary Refund an active RevenueCat Billing subscription
   * @request POST:/projects/{project_id}/subscriptions/{subscription_id}/actions/refund
   * @secure
   */
  refundSubscription = (projectId: string, subscriptionId: string, params: RequestParams = {}) =>
    this.http.request<
      RefundSubscriptionData,
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
      path: `/projects/${projectId}/subscriptions/${subscriptionId}/actions/refund`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
}

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
  CreateCustomerData,
  CreateCustomerPayload,
  DeleteCustomerData,
  Error,
  GetCustomerData,
  ListCustomerActiveEntitlementsData,
  ListCustomerActiveEntitlementsParams,
  ListCustomerAliasesData,
  ListCustomerAliasesParams,
  ListCustomersData,
  ListCustomersParams,
  ListPurchasesData,
  ListPurchasesParams,
  ListSubscriptionsData,
  ListSubscriptionsParams,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Customer<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:customers:read</code>.
   *
   * @tags Customer
   * @name ListCustomers
   * @summary Get a list of customers
   * @request GET:/projects/{project_id}/customers
   * @secure
   */
  listCustomers = ({ projectId, ...query }: ListCustomersParams, params: RequestParams = {}) =>
    this.http.request<
      ListCustomersData,
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
      path: `/projects/${projectId}/customers`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:customers:read_write</code>.
   *
   * @tags Customer
   * @name CreateCustomer
   * @summary Create a customer
   * @request POST:/projects/{project_id}/customers
   * @secure
   */
  createCustomer = (projectId: string, data: CreateCustomerPayload, params: RequestParams = {}) =>
    this.http.request<
      CreateCustomerData,
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
      path: `/projects/${projectId}/customers`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:customers:read</code>.
   *
   * @tags Customer
   * @name GetCustomer
   * @summary Get a customer
   * @request GET:/projects/{project_id}/customers/{customer_id}
   * @secure
   */
  getCustomer = (projectId: string, customerId: string, params: RequestParams = {}) =>
    this.http.request<
      GetCustomerData,
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
      path: `/projects/${projectId}/customers/${customerId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:customers:read_write</code>.
   *
   * @tags Customer
   * @name DeleteCustomer
   * @summary Delete a customer
   * @request DELETE:/projects/{project_id}/customers/{customer_id}
   * @secure
   */
  deleteCustomer = (projectId: string, customerId: string, params: RequestParams = {}) =>
    this.http.request<
      DeleteCustomerData,
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
      path: `/projects/${projectId}/customers/${customerId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:subscriptions:read</code>.
   *
   * @tags Customer
   * @name ListSubscriptions
   * @summary Get a list of subscriptions associated with a customer
   * @request GET:/projects/{project_id}/customers/{customer_id}/subscriptions
   * @secure
   */
  listSubscriptions = ({ projectId, customerId, ...query }: ListSubscriptionsParams, params: RequestParams = {}) =>
    this.http.request<
      ListSubscriptionsData,
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
      path: `/projects/${projectId}/customers/${customerId}/subscriptions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:purchases:read</code>.
   *
   * @tags Customer
   * @name ListPurchases
   * @summary Get a list of purchases associated with a customer
   * @request GET:/projects/{project_id}/customers/{customer_id}/purchases
   * @secure
   */
  listPurchases = ({ projectId, customerId, ...query }: ListPurchasesParams, params: RequestParams = {}) =>
    this.http.request<
      ListPurchasesData,
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
      path: `/projects/${projectId}/customers/${customerId}/purchases`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:customers:read</code>.
   *
   * @tags Customer
   * @name ListCustomerActiveEntitlements
   * @summary Get a list of customer's active entitlements
   * @request GET:/projects/{project_id}/customers/{customer_id}/active_entitlements
   * @secure
   */
  listCustomerActiveEntitlements = (
    { projectId, customerId, ...query }: ListCustomerActiveEntitlementsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ListCustomerActiveEntitlementsData,
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
      path: `/projects/${projectId}/customers/${customerId}/active_entitlements`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:customers:read</code>.
   *
   * @tags Customer
   * @name ListCustomerAliases
   * @summary Get a list of the customer's aliases
   * @request GET:/projects/{project_id}/customers/{customer_id}/aliases
   * @secure
   */
  listCustomerAliases = ({ projectId, customerId, ...query }: ListCustomerAliasesParams, params: RequestParams = {}) =>
    this.http.request<
      ListCustomerAliasesData,
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
      path: `/projects/${projectId}/customers/${customerId}/aliases`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}

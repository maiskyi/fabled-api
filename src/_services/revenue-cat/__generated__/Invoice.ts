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

import { Error, ListCustomerInvoicesData, ListCustomerInvoicesParams } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Invoice<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:invoices:read</code>.
   *
   * @tags Invoice
   * @name ListCustomerInvoices
   * @summary Get a list of the customer's invoices
   * @request GET:/projects/{project_id}/customers/{customer_id}/invoices
   * @secure
   */
  listCustomerInvoices = (
    { projectId, customerId, ...query }: ListCustomerInvoicesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ListCustomerInvoicesData,
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
      path: `/projects/${projectId}/customers/${customerId}/invoices`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>customer_information:invoices:read</code>.
   *
   * @tags Invoice
   * @name GetInvoice
   * @summary Get an invoice
   * @request GET:/projects/{project_id}/customers/{customer_id}/invoices/{invoice_id}/file
   * @secure
   */
  getInvoice = (projectId: string, customerId: string, invoiceId: string, params: RequestParams = {}) =>
    this.http.request<
      any,
      | void
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
      path: `/projects/${projectId}/customers/${customerId}/invoices/${invoiceId}/file`,
      method: 'GET',
      secure: true,
      ...params,
    });
}

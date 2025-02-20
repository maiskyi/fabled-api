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

import { Error, UserAccountData, UserBalanceData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class User<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Get information about the account associated with the provided API key
   *
   * @tags User
   * @name UserAccount
   * @summary Account details
   * @request GET:/v1/user/account
   * @secure
   */
  userAccount = (params: RequestParams = {}) =>
    this.http.request<UserAccountData, Error>({
      path: `/v1/user/account`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Get the credit balance of the account/organization associated with the API key
   *
   * @tags User
   * @name UserBalance
   * @summary Account balance
   * @request GET:/v1/user/balance
   * @secure
   */
  userBalance = (params: RequestParams = {}) =>
    this.http.request<UserBalanceData, Error>({
      path: `/v1/user/balance`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}

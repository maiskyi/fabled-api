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
  CreateProductData,
  CreateProductPayload,
  DeleteProductData,
  Error,
  GetProductData,
  GetProductParams,
  ListProductsData,
  ListProductsParams,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Product<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:products:read</code>.
   *
   * @tags Product
   * @name GetProduct
   * @summary Get a product
   * @request GET:/projects/{project_id}/products/{product_id}
   * @secure
   */
  getProduct = ({ projectId, productId, ...query }: GetProductParams, params: RequestParams = {}) =>
    this.http.request<
      GetProductData,
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
      path: `/projects/${projectId}/products/${productId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:products:read_write</code>.
   *
   * @tags Product
   * @name DeleteProduct
   * @summary Delete a product
   * @request DELETE:/projects/{project_id}/products/{product_id}
   * @secure
   */
  deleteProduct = (projectId: string, productId: string, params: RequestParams = {}) =>
    this.http.request<
      DeleteProductData,
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
      path: `/projects/${projectId}/products/${productId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:products:read</code>.
   *
   * @tags Product
   * @name ListProducts
   * @summary Get a list of products
   * @request GET:/projects/{project_id}/products
   * @secure
   */
  listProducts = ({ projectId, ...query }: ListProductsParams, params: RequestParams = {}) =>
    this.http.request<
      ListProductsData,
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
      path: `/projects/${projectId}/products`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description <div class="theme-admonition theme-admonition-info alert alert--warning"> <div class="heading">Warning</div> <div>This endpoint does not allow to create RevenueCat Billing products.</div> This endpoint requires the following permission(s): <code>project_configuration:products:read_write</code>.
   *
   * @tags Product
   * @name CreateProduct
   * @summary Create a product
   * @request POST:/projects/{project_id}/products
   * @secure
   */
  createProduct = (projectId: string, data: CreateProductPayload, params: RequestParams = {}) =>
    this.http.request<
      CreateProductData,
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
      path: `/projects/${projectId}/products`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}

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
  AttachProductsToPackageData,
  AttachProductsToPackagePayload,
  CreatePackagesData,
  CreatePackagesPayload,
  DeletePackageFromOfferingData,
  DetachProductsFromPackageData,
  DetachProductsFromPackagePayload,
  Error,
  GetPackageData,
  GetPackageParams,
  GetProductsFromPackageData,
  GetProductsFromPackageParams,
  ListPackagesData,
  ListPackagesParams,
  UpdatePackageData,
  UpdatePackagePayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Package<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:packages:read</code>.
   *
   * @tags Package
   * @name GetPackage
   * @summary Get a package
   * @request GET:/projects/{project_id}/packages/{package_id}
   * @secure
   */
  getPackage = ({ projectId, packageId, ...query }: GetPackageParams, params: RequestParams = {}) =>
    this.http.request<
      GetPackageData,
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
      path: `/projects/${projectId}/packages/${packageId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:packages:read_write</code>.
   *
   * @tags Package
   * @name UpdatePackage
   * @summary Update a package
   * @request POST:/projects/{project_id}/packages/{package_id}
   * @secure
   */
  updatePackage = (projectId: string, packageId: string, data: UpdatePackagePayload, params: RequestParams = {}) =>
    this.http.request<
      UpdatePackageData,
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
      path: `/projects/${projectId}/packages/${packageId}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:packages:read_write</code>.
   *
   * @tags Package
   * @name DeletePackageFromOffering
   * @summary Delete a package
   * @request DELETE:/projects/{project_id}/packages/{package_id}
   * @secure
   */
  deletePackageFromOffering = (projectId: string, packageId: string, params: RequestParams = {}) =>
    this.http.request<
      DeletePackageFromOfferingData,
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
      path: `/projects/${projectId}/packages/${packageId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:packages:read</code>.
   *
   * @tags Package
   * @name ListPackages
   * @summary Get a list of packages in an offering
   * @request GET:/projects/{project_id}/offerings/{offering_id}/packages
   * @secure
   */
  listPackages = ({ projectId, offeringId, ...query }: ListPackagesParams, params: RequestParams = {}) =>
    this.http.request<
      ListPackagesData,
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
      path: `/projects/${projectId}/offerings/${offeringId}/packages`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:packages:read_write</code>.
   *
   * @tags Package
   * @name CreatePackages
   * @summary Create a package
   * @request POST:/projects/{project_id}/offerings/{offering_id}/packages
   * @secure
   */
  createPackages = (projectId: string, offeringId: string, data: CreatePackagesPayload, params: RequestParams = {}) =>
    this.http.request<
      CreatePackagesData,
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
      path: `/projects/${projectId}/offerings/${offeringId}/packages`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:packages:read</code>.
   *
   * @tags Package
   * @name GetProductsFromPackage
   * @summary Get a list of products attached to a given package of an offering
   * @request GET:/projects/{project_id}/packages/{package_id}/products
   * @secure
   */
  getProductsFromPackage = (
    { projectId, packageId, ...query }: GetProductsFromPackageParams,
    params: RequestParams = {},
  ) =>
    this.http.request<
      GetProductsFromPackageData,
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
      path: `/projects/${projectId}/packages/${packageId}/products`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:packages:read_write</code>.
   *
   * @tags Package
   * @name AttachProductsToPackage
   * @summary Attach a set of products to a package
   * @request POST:/projects/{project_id}/packages/{package_id}/actions/attach_products
   * @secure
   */
  attachProductsToPackage = (
    projectId: string,
    packageId: string,
    data: AttachProductsToPackagePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      AttachProductsToPackageData,
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
      path: `/projects/${projectId}/packages/${packageId}/actions/attach_products`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description This endpoint requires the following permission(s): <code>project_configuration:packages:read_write</code>.
   *
   * @tags Package
   * @name DetachProductsFromPackage
   * @summary Detach a set of products from a package
   * @request POST:/projects/{project_id}/packages/{package_id}/actions/detach_products
   * @secure
   */
  detachProductsFromPackage = (
    projectId: string,
    packageId: string,
    data: DetachProductsFromPackagePayload,
    params: RequestParams = {},
  ) =>
    this.http.request<
      DetachProductsFromPackageData,
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
      path: `/projects/${projectId}/packages/${packageId}/actions/detach_products`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}

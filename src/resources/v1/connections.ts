// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Organization-level connection credential management
 */
export class Connections extends APIResource {
  /**
   * Creates a new key-value connection credential.
   */
  create(body: ConnectionCreateParams, options?: RequestOptions): APIPromise<ConnectionDetail> {
    return this._client.post('/api/v1/connections', { body, ...options });
  }

  /**
   * Get a connection
   */
  retrieve(connectionID: string, options?: RequestOptions): APIPromise<ConnectionDetail> {
    return this._client.get(path`/api/v1/connections/${connectionID}`, options);
  }

  /**
   * Updates name, key, and/or value on a standard connection. OAuth connections
   * cannot be updated here.
   */
  update(
    connectionID: string,
    body: ConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionDetail> {
    return this._client.patch(path`/api/v1/connections/${connectionID}`, { body, ...options });
  }

  /**
   * Returns all connections in the organization.
   */
  list(
    query: ConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionListResponse> {
    return this._client.get('/api/v1/connections', { query, ...options });
  }

  /**
   * Delete a connection
   */
  delete(connectionID: string, options?: RequestOptions): APIPromise<ConnectionDeleteResponse> {
    return this._client.delete(path`/api/v1/connections/${connectionID}`, options);
  }

  /**
   * Creates a pending OAuth connection and returns a provision URL. Present the
   * provision URL to the user to complete the OAuth consent flow.
   */
  createOAuth(body: ConnectionCreateOAuthParams, options?: RequestOptions): APIPromise<OAuthProvision> {
    return this._client.post('/api/v1/connections/oauth', { body, ...options });
  }

  /**
   * Returns lightweight validity and expiration status.
   */
  getStatus(connectionID: string, options?: RequestOptions): APIPromise<ConnectionStatus> {
    return this._client.get(path`/api/v1/connections/${connectionID}/status`, options);
  }

  /**
   * Refreshes OAuth tokens for a connection. Only supported for refreshable
   * connection types.
   */
  refresh(connectionID: string, options?: RequestOptions): APIPromise<ConnectionStatus> {
    return this._client.post(path`/api/v1/connections/${connectionID}/refresh`, options);
  }

  /**
   * Returns a new provision URL for an existing OAuth connection to re-authorize.
   */
  reprovisionOAuth(connectionID: string, options?: RequestOptions): APIPromise<OAuthProvision> {
    return this._client.post(path`/api/v1/connections/${connectionID}/reprovision`, options);
  }
}

export interface ConnectionDetail {
  id: string;

  createdAt: string;

  isExpired: boolean;

  isValid: boolean;

  name: string;

  settingType: string;

  updatedAt: string;

  acquiredPermissions?: Array<string>;

  errorReason?: string;

  expiresAt?: string;

  extraFields?: { [key: string]: string };
}

export interface ConnectionStatus {
  id: string;

  isExpired: boolean;

  isValid: boolean;

  errorReason?: string;

  expiresAt?: string;
}

export interface OAuthProvision {
  connectionId: string;

  /**
   * URL to present to the user to complete the OAuth consent flow
   */
  provisionUrl: string;
}

export interface ConnectionListResponse {
  data: Array<ConnectionListResponse.Data>;
}

export namespace ConnectionListResponse {
  export interface Data {
    id: string;

    createdAt: string;

    isExpired: boolean;

    isValid: boolean;

    name: string;

    settingType: string;

    updatedAt: string;

    errorReason?: string;

    expiresAt?: string;
  }
}

export interface ConnectionDeleteResponse {
  deleted: true;
}

export interface ConnectionCreateParams {
  key: string;

  name: string;

  value: string;
}

export interface ConnectionUpdateParams {
  key?: string;

  name?: string;

  value?: string;
}

export interface ConnectionListParams {
  /**
   * Filter by setting type (e.g. Standard, or an OAuth provider type)
   */
  type?: string;
}

export interface ConnectionCreateOAuthParams {
  name: string;

  /**
   * Must be an OAuth provider type
   */
  settingType: string;

  scopes?: Array<string>;
}

export declare namespace Connections {
  export {
    type ConnectionDetail as ConnectionDetail,
    type ConnectionStatus as ConnectionStatus,
    type OAuthProvision as OAuthProvision,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionDeleteResponse as ConnectionDeleteResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionUpdateParams as ConnectionUpdateParams,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionCreateOAuthParams as ConnectionCreateOAuthParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Clone knowledge base file management
 */
export class Files extends APIResource {
  /**
   * **Not yet implemented.** Returns 501. Pending Pinecone migration.
   */
  create(cloneID: string, body: FileCreateParams, options?: RequestOptions): APIPromise<KBFileSummary> {
    return this._client.post(path`/public/v1/clones/${cloneID}/files`, { body, ...options });
  }

  /**
   * Get a knowledge base file
   */
  retrieve(fileID: string, params: FileRetrieveParams, options?: RequestOptions): APIPromise<KBFileSummary> {
    const { cloneId } = params;
    return this._client.get(path`/public/v1/clones/${cloneId}/files/${fileID}`, options);
  }

  /**
   * List knowledge base files
   */
  list(cloneID: string, options?: RequestOptions): APIPromise<FileListResponse> {
    return this._client.get(path`/public/v1/clones/${cloneID}/files`, options);
  }

  /**
   * **Not yet implemented.** Returns 501. Pending Pinecone migration.
   */
  delete(fileID: string, params: FileDeleteParams, options?: RequestOptions): APIPromise<FileDeleteResponse> {
    const { cloneId } = params;
    return this._client.delete(path`/public/v1/clones/${cloneId}/files/${fileID}`, options);
  }
}

export interface KBFileSummary {
  id: string;

  contentType: string;

  createdAt: string;

  name: string;

  url: string;

  uploadUrl?: string;
}

export interface FileListResponse {
  data: Array<KBFileSummary>;
}

export interface FileDeleteResponse {
  deleted: true;
}

export interface FileCreateParams {
  url: string;

  contentType?: string;

  name?: string;
}

export interface FileRetrieveParams {
  cloneId: string;
}

export interface FileDeleteParams {
  cloneId: string;
}

export declare namespace Files {
  export {
    type KBFileSummary as KBFileSummary,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileDeleteParams as FileDeleteParams,
  };
}

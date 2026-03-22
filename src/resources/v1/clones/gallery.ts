// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Clone gallery media management
 */
export class Gallery extends APIResource {
  /**
   * Downloads media from the provided URL and adds it to the clone's gallery.
   */
  create(
    cloneID: string,
    body: GalleryCreateParams,
    options?: RequestOptions,
  ): APIPromise<GalleryItemSummary> {
    return this._client.post(path`/public/v1/clones/${cloneID}/gallery`, { body, ...options });
  }

  /**
   * Get a gallery item
   */
  retrieve(
    itemID: string,
    params: GalleryRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GalleryItemSummary> {
    const { cloneId } = params;
    return this._client.get(path`/public/v1/clones/${cloneId}/gallery/${itemID}`, options);
  }

  /**
   * List gallery items
   */
  list(
    cloneID: string,
    query: GalleryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GalleryListResponse> {
    return this._client.get(path`/public/v1/clones/${cloneID}/gallery`, { query, ...options });
  }

  /**
   * Delete a gallery item
   */
  delete(
    itemID: string,
    params: GalleryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<GalleryDeleteResponse> {
    const { cloneId } = params;
    return this._client.delete(path`/public/v1/clones/${cloneId}/gallery/${itemID}`, options);
  }
}

export interface GalleryItemSummary {
  id: string;

  createdAt: string;

  name: string;

  type: 'Video' | 'Audio' | 'Image';

  updatedAt: string;

  url: string;

  description?: string;

  isHeroVideo?: boolean;

  thumbnailUrl?: string;
}

export interface GalleryListResponse {
  data: Array<GalleryItemSummary>;
}

export interface GalleryDeleteResponse {
  deleted: true;
}

export interface GalleryCreateParams {
  /**
   * URL of the media file to download and add to the gallery
   */
  mediaUrl: string;

  type: 'Video' | 'Audio' | 'Image';

  description?: string;

  isHeroVideo?: boolean;
}

export interface GalleryRetrieveParams {
  cloneId: string;
}

export interface GalleryListParams {
  /**
   * Filter by media type
   */
  type?: 'Video' | 'Audio' | 'Image';
}

export interface GalleryDeleteParams {
  cloneId: string;
}

export declare namespace Gallery {
  export {
    type GalleryItemSummary as GalleryItemSummary,
    type GalleryListResponse as GalleryListResponse,
    type GalleryDeleteResponse as GalleryDeleteResponse,
    type GalleryCreateParams as GalleryCreateParams,
    type GalleryRetrieveParams as GalleryRetrieveParams,
    type GalleryListParams as GalleryListParams,
    type GalleryDeleteParams as GalleryDeleteParams,
  };
}

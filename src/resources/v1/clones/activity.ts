// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Task run history
 */
export class Activity extends APIResource {
  /**
   * Returns a single task run with skill execution details.
   */
  retrieve(
    activityID: string,
    params: ActivityRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ActivityRetrieveResponse> {
    const { cloneId } = params;
    return this._client.get(path`/api/v1/clones/${cloneId}/activity/${activityID}`, options);
  }

  /**
   * Returns all task run records for a clone, ordered by creation date descending.
   */
  list(cloneID: string, options?: RequestOptions): APIPromise<ActivityListResponse> {
    return this._client.get(path`/api/v1/clones/${cloneID}/activity`, options);
  }

  /**
   * Delete a task run
   */
  delete(
    activityID: string,
    params: ActivityDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ActivityDeleteResponse> {
    const { cloneId } = params;
    return this._client.delete(path`/api/v1/clones/${cloneId}/activity/${activityID}`, options);
  }
}

export interface ActivityRetrieveResponse {
  id: string;

  createdAt: string;

  isSuccess: boolean;

  skillCount: number;

  taskId: string;

  response?: string;

  skills?: Array<ActivityRetrieveResponse.Skill>;

  taskTitle?: string;
}

export namespace ActivityRetrieveResponse {
  export interface Skill {
    isSuccess: boolean;

    skillName: string;

    result?: string;
  }
}

export interface ActivityListResponse {
  data: Array<ActivityListResponse.Data>;
}

export namespace ActivityListResponse {
  export interface Data {
    id: string;

    createdAt: string;

    isSuccess: boolean;

    taskId: string;

    response?: string;

    taskTitle?: string;
  }
}

export interface ActivityDeleteResponse {
  deleted: true;
}

export interface ActivityRetrieveParams {
  cloneId: string;
}

export interface ActivityDeleteParams {
  cloneId: string;
}

export declare namespace Activity {
  export {
    type ActivityRetrieveResponse as ActivityRetrieveResponse,
    type ActivityListResponse as ActivityListResponse,
    type ActivityDeleteResponse as ActivityDeleteResponse,
    type ActivityRetrieveParams as ActivityRetrieveParams,
    type ActivityDeleteParams as ActivityDeleteParams,
  };
}

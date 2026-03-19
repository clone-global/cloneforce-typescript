// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Scheduled task management
 */
export class Tasks extends APIResource {
  /**
   * Creates a new scheduled task for a clone.
   */
  create(cloneID: string, body: TaskCreateParams, options?: RequestOptions): APIPromise<TaskSummary> {
    return this._client.post(path`/api/v1/clones/${cloneID}/tasks`, { body, ...options });
  }

  /**
   * Get a scheduled task
   */
  retrieve(taskID: string, params: TaskRetrieveParams, options?: RequestOptions): APIPromise<TaskSummary> {
    const { cloneId } = params;
    return this._client.get(path`/api/v1/clones/${cloneId}/tasks/${taskID}`, options);
  }

  /**
   * Updates one or more fields on a scheduled task.
   */
  update(taskID: string, params: TaskUpdateParams, options?: RequestOptions): APIPromise<TaskSummary> {
    const { cloneId, ...body } = params;
    return this._client.patch(path`/api/v1/clones/${cloneId}/tasks/${taskID}`, { body, ...options });
  }

  /**
   * Returns all scheduled tasks for a clone.
   */
  list(
    cloneID: string,
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskListResponse> {
    return this._client.get(path`/api/v1/clones/${cloneID}/tasks`, { query, ...options });
  }

  /**
   * Delete a scheduled task
   */
  delete(taskID: string, params: TaskDeleteParams, options?: RequestOptions): APIPromise<TaskDeleteResponse> {
    const { cloneId } = params;
    return this._client.delete(path`/api/v1/clones/${cloneId}/tasks/${taskID}`, options);
  }
}

export interface TaskRecurrence {
  interval: number;

  pattern: 'Minutely' | 'Hourly' | 'Daily' | 'Weekly' | 'Monthly' | 'Yearly';

  endsAt?: string;
}

export interface TaskSummary {
  id: string;

  createdAt: string;

  isRecurring: boolean;

  prompt: string;

  startsAt: string;

  title: string;

  updatedAt: string;

  color?: string;

  lastRanAt?: string;

  recurrence?: TaskRecurrence;
}

export interface TaskListResponse {
  data: Array<TaskSummary>;
}

export interface TaskDeleteResponse {
  deleted: true;
}

export interface TaskCreateParams {
  prompt: string;

  startsAt: string;

  title: string;

  color?: string;

  isRecurring?: boolean;

  recurrence?: TaskRecurrence;
}

export interface TaskRetrieveParams {
  cloneId: string;
}

export interface TaskUpdateParams {
  /**
   * Path param
   */
  cloneId: string;

  /**
   * Body param
   */
  color?: string;

  /**
   * Body param
   */
  isRecurring?: boolean;

  /**
   * Body param
   */
  prompt?: string;

  /**
   * Body param
   */
  recurrence?: TaskRecurrence;

  /**
   * Body param
   */
  startsAt?: string;

  /**
   * Body param
   */
  title?: string;
}

export interface TaskListParams {
  /**
   * Filter by recurring status
   */
  isRecurring?: 'true' | 'false';
}

export interface TaskDeleteParams {
  cloneId: string;
}

export declare namespace Tasks {
  export {
    type TaskRecurrence as TaskRecurrence,
    type TaskSummary as TaskSummary,
    type TaskListResponse as TaskListResponse,
    type TaskDeleteResponse as TaskDeleteResponse,
    type TaskCreateParams as TaskCreateParams,
    type TaskRetrieveParams as TaskRetrieveParams,
    type TaskUpdateParams as TaskUpdateParams,
    type TaskListParams as TaskListParams,
    type TaskDeleteParams as TaskDeleteParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ConnectionsAPI from './connections';
import {
  ConnectionListParams,
  ConnectionListResponse,
  ConnectionUpdateParams,
  Connections,
  SkillConnectionInfo,
} from './connections';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Skill marketplace search and clone skill management
 */
export class Skills extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);

  /**
   * Attaches a marketplace skill to a clone. Returns 409 if already attached.
   */
  create(cloneID: string, body: SkillCreateParams, options?: RequestOptions): APIPromise<SkillSummary> {
    return this._client.post(path`/api/v1/clones/${cloneID}/skills`, { body, ...options });
  }

  /**
   * Updates settings and/or active status of a skill on a clone.
   */
  update(skillName: string, params: SkillUpdateParams, options?: RequestOptions): APIPromise<SkillSummary> {
    const { cloneId, ...body } = params;
    return this._client.patch(path`/api/v1/clones/${cloneId}/skills/${skillName}`, { body, ...options });
  }

  /**
   * Returns all skills attached to a clone, excluding hidden system skills.
   */
  list(
    cloneID: string,
    query: SkillListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SkillListResponse> {
    return this._client.get(path`/api/v1/clones/${cloneID}/skills`, { query, ...options });
  }

  /**
   * Detaches a skill from a clone. System skills cannot be removed.
   */
  delete(
    skillName: string,
    params: SkillDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SkillDeleteResponse> {
    const { cloneId } = params;
    return this._client.delete(path`/api/v1/clones/${cloneId}/skills/${skillName}`, options);
  }
}

export interface SkillSummary {
  accuracy: number;

  isActive: boolean;

  isSystemSkill: boolean;

  name: string;

  totalRuns: number;

  category?: string;

  description?: string;

  skillId?: string;
}

export interface SkillListResponse {
  data: Array<SkillSummary>;
}

export interface SkillDeleteResponse {
  deleted: true;
}

export interface SkillCreateParams {
  skillId: string;

  isActive?: boolean;
}

export interface SkillUpdateParams {
  /**
   * Path param
   */
  cloneId: string;

  /**
   * Body param
   */
  isActive?: boolean;

  /**
   * Body param
   */
  settings?: Array<SkillUpdateParams.Setting>;
}

export namespace SkillUpdateParams {
  export interface Setting {
    name: string;

    /**
     * Required for connection-type settings
     */
    connectionId?: string;

    /**
     * Required for non-connection settings
     */
    value?: string;
  }
}

export interface SkillListParams {
  /**
   * Filter by active status
   */
  active?: 'true' | 'false';
}

export interface SkillDeleteParams {
  cloneId: string;
}

Skills.Connections = Connections;

export declare namespace Skills {
  export {
    type SkillSummary as SkillSummary,
    type SkillListResponse as SkillListResponse,
    type SkillDeleteResponse as SkillDeleteResponse,
    type SkillCreateParams as SkillCreateParams,
    type SkillUpdateParams as SkillUpdateParams,
    type SkillListParams as SkillListParams,
    type SkillDeleteParams as SkillDeleteParams,
  };

  export {
    Connections as Connections,
    type SkillConnectionInfo as SkillConnectionInfo,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionUpdateParams as ConnectionUpdateParams,
    type ConnectionListParams as ConnectionListParams,
  };
}

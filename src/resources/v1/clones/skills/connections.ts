// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Skill marketplace search and clone skill management
 */
export class Connections extends APIResource {
  /**
   * Assigns a connection to a connection-type setting on a clone skill.
   */
  update(
    settingName: string,
    params: ConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SkillConnectionInfo> {
    const { cloneId, skillName, ...body } = params;
    return this._client.put(
      path`/public/v1/clones/${cloneId}/skills/${skillName}/connections/${settingName}`,
      { body, ...options },
    );
  }

  /**
   * Returns connection-type settings for a skill on a clone, with their
   * configuration status.
   */
  list(
    skillName: string,
    params: ConnectionListParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionListResponse> {
    const { cloneId } = params;
    return this._client.get(path`/public/v1/clones/${cloneId}/skills/${skillName}/connections`, options);
  }
}

export interface SkillConnectionInfo {
  isConfigured: boolean;

  settingName: string;

  settingType: string;

  connectionId?: string;

  isValid?: boolean;
}

export interface ConnectionListResponse {
  data: Array<SkillConnectionInfo>;
}

export interface ConnectionUpdateParams {
  /**
   * Path param
   */
  cloneId: string;

  /**
   * Path param
   */
  skillName: string;

  /**
   * Body param
   */
  connectionId: string;
}

export interface ConnectionListParams {
  cloneId: string;
}

export declare namespace Connections {
  export {
    type SkillConnectionInfo as SkillConnectionInfo,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionUpdateParams as ConnectionUpdateParams,
    type ConnectionListParams as ConnectionListParams,
  };
}

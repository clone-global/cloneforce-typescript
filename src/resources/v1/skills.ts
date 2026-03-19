// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Skill marketplace search and clone skill management
 */
export class Skills extends APIResource {
  /**
   * Returns full skill details including setting definitions. If `cloneId` is
   * provided, also returns attachment and configuration status.
   */
  retrieve(
    skillID: string,
    query: SkillRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SkillRetrieveResponse> {
    return this._client.get(path`/api/v1/skills/${skillID}`, { query, ...options });
  }

  /**
   * Searches the skill marketplace. Optionally marks results already attached to a
   * clone.
   */
  search(query: SkillSearchParams, options?: RequestOptions): APIPromise<SkillSearchResponse> {
    return this._client.get('/api/v1/skills/search', { query, ...options });
  }
}

export interface SkillRetrieveResponse {
  isAttached: boolean;

  logicType: string;

  name: string;

  requiresConnections: boolean;

  skillId: string;

  category?: string;

  connectionsConfigured?: boolean;

  description?: string;

  isActive?: boolean;

  settingDefinitions?: Array<SkillRetrieveResponse.SettingDefinition>;

  settingsConfigured?: Array<SkillRetrieveResponse.SettingsConfigured>;
}

export namespace SkillRetrieveResponse {
  export interface SettingDefinition {
    isConnection: boolean;

    isRequired: boolean;

    name: string;

    description?: string;

    settingType?: string;
  }

  export interface SettingsConfigured {
    isConfigured: boolean;

    isConnection: boolean;

    name: string;
  }
}

export interface SkillSearchResponse {
  data: Array<SkillSearchResponse.Data>;
}

export namespace SkillSearchResponse {
  export interface Data {
    isAlreadyAttached: boolean;

    name: string;

    skillId: string;

    description?: string;

    score?: number;
  }
}

export interface SkillRetrieveParams {
  /**
   * Clone ID to check attachment and configuration status
   */
  cloneId?: string;
}

export interface SkillSearchParams {
  /**
   * Search query
   */
  q: string;

  /**
   * Clone ID to check attachment status against
   */
  cloneId?: string;
}

export declare namespace Skills {
  export {
    type SkillRetrieveResponse as SkillRetrieveResponse,
    type SkillSearchResponse as SkillSearchResponse,
    type SkillRetrieveParams as SkillRetrieveParams,
    type SkillSearchParams as SkillSearchParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Clone integration management (Slack, Email, MS Teams, Phone)
 */
export class Msteams extends APIResource {
  /**
   * Adds a team to an existing MS Teams integration. Validates team access via MS
   * Graph.
   */
  teams(
    integrationID: string,
    params: MsteamTeamsParams,
    options?: RequestOptions,
  ): APIPromise<MsteamTeamsResponse> {
    const { cloneId, ...body } = params;
    return this._client.post(path`/api/v1/clones/${cloneId}/integrations/msteams/${integrationID}/teams`, {
      body,
      ...options,
    });
  }
}

export interface MsTeamsTeamRef {
  id: string;

  name: string;
}

export interface MsteamTeamsResponse {
  id: string;

  status: string;

  organizationName?: string;

  teams?: Array<MsTeamsTeamRef>;
}

export interface MsteamTeamsParams {
  /**
   * Path param
   */
  cloneId: string;

  /**
   * Body param
   */
  teamId: string;
}

export declare namespace Msteams {
  export {
    type MsTeamsTeamRef as MsTeamsTeamRef,
    type MsteamTeamsResponse as MsteamTeamsResponse,
    type MsteamTeamsParams as MsteamTeamsParams,
  };
}

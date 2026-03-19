// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Clone integration management (Slack, Email, MS Teams, Phone)
 */
export class Slack extends APIResource {
  /**
   * Creates a pending Slack integration and returns a Slack app manifest for
   * installation.
   */
  create(cloneID: string, options?: RequestOptions): APIPromise<SlackIntegration> {
    return this._client.post(path`/api/v1/clones/${cloneID}/integrations/slack`, options);
  }

  /**
   * Configures bot token and signing secret. Tests the connection if the bot token
   * changes.
   */
  update(
    integrationID: string,
    params: SlackUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SlackIntegration> {
    const { cloneId, ...body } = params;
    return this._client.patch(path`/api/v1/clones/${cloneId}/integrations/slack/${integrationID}`, {
      body,
      ...options,
    });
  }
}

export interface SlackIntegration {
  id: string;

  status: string;

  manifest?: string;

  teamId?: string;

  teamName?: string;
}

export interface SlackUpdateParams {
  /**
   * Path param
   */
  cloneId: string;

  /**
   * Body param
   */
  botToken?: string;

  /**
   * Body param
   */
  signingSecret?: string;
}

export declare namespace Slack {
  export { type SlackIntegration as SlackIntegration, type SlackUpdateParams as SlackUpdateParams };
}

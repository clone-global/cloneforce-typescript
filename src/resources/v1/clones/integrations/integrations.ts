// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MsteamsAPI from './msteams';
import { MsTeamsTeamRef, MsteamTeamsParams, MsteamTeamsResponse, Msteams } from './msteams';
import * as SlackAPI from './slack';
import { Slack, SlackIntegration, SlackUpdateParams } from './slack';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Clone integration management (Slack, Email, MS Teams, Phone)
 */
export class Integrations extends APIResource {
  slack: SlackAPI.Slack = new SlackAPI.Slack(this._client);
  msteams: MsteamsAPI.Msteams = new MsteamsAPI.Msteams(this._client);

  /**
   * Get an integration
   */
  retrieve(
    integrationID: string,
    params: IntegrationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationSummary> {
    const { cloneId } = params;
    return this._client.get(path`/public/v1/clones/${cloneId}/integrations/${integrationID}`, options);
  }

  /**
   * Returns all integrations for a clone (Slack, Email, MS Teams, Phone).
   */
  list(
    cloneID: string,
    query: IntegrationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationListResponse> {
    return this._client.get(path`/public/v1/clones/${cloneID}/integrations`, { query, ...options });
  }

  /**
   * Deletes an integration and performs type-specific cleanup (e.g. Twilio release
   * for phone).
   */
  delete(
    integrationID: string,
    params: IntegrationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationDeleteResponse> {
    const { cloneId } = params;
    return this._client.delete(path`/public/v1/clones/${cloneId}/integrations/${integrationID}`, options);
  }

  /**
   * Purchases a phone number and provisions it for clone voice calls. Requires
   * sufficient account credits. Creates a Twilio number, ElevenLabs voice agent, and
   * billing subscription.
   */
  createPhone(
    cloneID: string,
    body: IntegrationCreatePhoneParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationCreatePhoneResponse> {
    return this._client.post(path`/public/v1/clones/${cloneID}/integrations/phone`, { body, ...options });
  }

  /**
   * Returns a browser URL for the OAuth-based setup flow. Supported types: `email`,
   * `msteams`. Present this URL to the user and poll the integrations list to detect
   * completion.
   */
  getSetupURL(
    integrationID: string,
    params: IntegrationGetSetupURLParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationGetSetupURLResponse> {
    const { cloneId } = params;
    return this._client.get(path`/public/v1/clones/${cloneId}/integrations/${integrationID}/setup`, options);
  }
}

export interface IntegrationSummary {
  id: string;

  createdAt: string;

  status: 'Pending' | 'Connected' | 'Error' | 'Provisioning';

  type: 'Slack' | 'Email' | 'MsTeams' | 'Phone';

  updatedAt: string;

  /**
   * Type-specific integration details
   */
  detail?:
    | IntegrationSummary.SlackDetail
    | IntegrationSummary.EmailDetail
    | IntegrationSummary.MsTeamsDetail
    | IntegrationSummary.PhoneDetail;

  errorMessage?: string;

  name?: string;
}

export namespace IntegrationSummary {
  export interface SlackDetail {
    teamId?: string;

    teamName?: string;
  }

  export interface EmailDetail {
    email: string;

    connectionType?: string;
  }

  export interface MsTeamsDetail {
    organizationName?: string;

    teams?: Array<MsteamsAPI.MsTeamsTeamRef>;
  }

  export interface PhoneDetail {
    phoneNumber?: string;
  }
}

export interface IntegrationListResponse {
  data: Array<IntegrationSummary>;
}

export interface IntegrationDeleteResponse {
  deleted: true;
}

export interface IntegrationCreatePhoneResponse {
  id: string;

  phoneNumber: string;

  status: string;
}

export interface IntegrationGetSetupURLResponse {
  setupUrl: string;

  type: string;
}

export interface IntegrationRetrieveParams {
  cloneId: string;
}

export interface IntegrationListParams {
  /**
   * Filter by integration type
   */
  type?: 'Slack' | 'Email' | 'MsTeams' | 'Phone';
}

export interface IntegrationDeleteParams {
  cloneId: string;
}

export interface IntegrationCreatePhoneParams {
  /**
   * Phone number to purchase (from the available numbers search)
   */
  phone: string;
}

export interface IntegrationGetSetupURLParams {
  cloneId: string;
}

Integrations.Slack = Slack;
Integrations.Msteams = Msteams;

export declare namespace Integrations {
  export {
    type IntegrationSummary as IntegrationSummary,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationDeleteResponse as IntegrationDeleteResponse,
    type IntegrationCreatePhoneResponse as IntegrationCreatePhoneResponse,
    type IntegrationGetSetupURLResponse as IntegrationGetSetupURLResponse,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
    type IntegrationCreatePhoneParams as IntegrationCreatePhoneParams,
    type IntegrationGetSetupURLParams as IntegrationGetSetupURLParams,
  };

  export {
    Slack as Slack,
    type SlackIntegration as SlackIntegration,
    type SlackUpdateParams as SlackUpdateParams,
  };

  export {
    Msteams as Msteams,
    type MsTeamsTeamRef as MsTeamsTeamRef,
    type MsteamTeamsResponse as MsteamTeamsResponse,
    type MsteamTeamsParams as MsteamTeamsParams,
  };
}

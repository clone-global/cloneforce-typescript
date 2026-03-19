// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Clone integration management (Slack, Email, MS Teams, Phone)
 */
export class Phone extends APIResource {
  /**
   * Searches for available phone numbers via Twilio that can be purchased.
   */
  listAvailable(
    query: PhoneListAvailableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhoneListAvailableResponse> {
    return this._client.get('/api/v1/integrations/phone/available', { query, ...options });
  }
}

export interface PhoneListAvailableResponse {
  data: Array<PhoneListAvailableResponse.Data>;
}

export namespace PhoneListAvailableResponse {
  export interface Data {
    friendlyName: string;

    phone: string;

    country?: string;

    locality?: string;

    postalCode?: string;

    region?: string;
  }
}

export interface PhoneListAvailableParams {
  /**
   * Area code filter
   */
  areaCode?: number;

  /**
   * Country code (default US)
   */
  country?: string;

  /**
   * Max results (default 20)
   */
  limit?: number;
}

export declare namespace Phone {
  export {
    type PhoneListAvailableResponse as PhoneListAvailableResponse,
    type PhoneListAvailableParams as PhoneListAvailableParams,
  };
}

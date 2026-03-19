// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PhoneAPI from './phone';
import { Phone, PhoneListAvailableParams, PhoneListAvailableResponse } from './phone';

export class Integrations extends APIResource {
  phone: PhoneAPI.Phone = new PhoneAPI.Phone(this._client);
}

Integrations.Phone = Phone;

export declare namespace Integrations {
  export {
    Phone as Phone,
    type PhoneListAvailableResponse as PhoneListAvailableResponse,
    type PhoneListAvailableParams as PhoneListAvailableParams,
  };
}

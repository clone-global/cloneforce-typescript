// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Cloneforce } from '../client';

export abstract class APIResource {
  protected _client: Cloneforce;

  constructor(client: Cloneforce) {
    this._client = client;
  }
}

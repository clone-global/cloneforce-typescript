// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VoiceAPI from './voice';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Clone profile management and asset generation
 */
export class Headshot extends APIResource {
  /**
   * Triggers asynchronous headshot regeneration for a clone. Returns immediately
   * with 202 Accepted. Poll `GET /clones/{cloneId}/profile` and check
   * `state.headshot` for progress.
   *
   * An optional request body can include `additionalInstructions` to nudge the
   * appearance (e.g. "longer hair", "wearing glasses"). An empty body performs a
   * standard regeneration.
   */
  generate(
    cloneID: string,
    body: HeadshotGenerateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VoiceAPI.GenerationStatus> {
    return this._client.post(path`/api/v1/clones/${cloneID}/headshot/generate`, { body, ...options });
  }
}

export interface HeadshotGenerateParams {
  /**
   * Optional instructions to nudge the generation (e.g. "deeper voice", "longer
   * hair")
   */
  additionalInstructions?: string;
}

export declare namespace Headshot {
  export { type HeadshotGenerateParams as HeadshotGenerateParams };
}

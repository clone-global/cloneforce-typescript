// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Clone profile management and asset generation
 */
export class Voice extends APIResource {
  /**
   * Triggers asynchronous voice regeneration for a clone. Returns immediately with
   * 202 Accepted. Poll `GET /clones/{cloneId}/profile` and check `state.voice` for
   * progress.
   *
   * An optional request body can include `additionalInstructions` to nudge the voice
   * style (e.g. "deeper voice", "more energetic"). An empty body performs a standard
   * regeneration.
   */
  generate(
    cloneID: string,
    body: VoiceGenerateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GenerationStatus> {
    return this._client.post(path`/api/v1/clones/${cloneID}/voice/generate`, { body, ...options });
  }
}

export interface GenerateRequest {
  /**
   * Optional instructions to nudge the generation (e.g. "deeper voice", "longer
   * hair")
   */
  additionalInstructions?: string;
}

export interface GenerationStatus {
  status: string;
}

export interface VoiceGenerateParams {
  /**
   * Optional instructions to nudge the generation (e.g. "deeper voice", "longer
   * hair")
   */
  additionalInstructions?: string;
}

export declare namespace Voice {
  export {
    type GenerateRequest as GenerateRequest,
    type GenerationStatus as GenerationStatus,
    type VoiceGenerateParams as VoiceGenerateParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Clone profile management and asset generation
 */
export class Profile extends APIResource {
  /**
   * Returns the full profile and aesthetics for a clone.
   */
  retrieve(cloneID: string, options?: RequestOptions): APIPromise<CloneProfile> {
    return this._client.get(path`/public/v1/clones/${cloneID}/profile`, options);
  }

  /**
   * Updates one or more fields on a clone's profile. Only provided fields are
   * changed.
   */
  update(cloneID: string, body: ProfileUpdateParams, options?: RequestOptions): APIPromise<CloneProfile> {
    return this._client.patch(path`/public/v1/clones/${cloneID}/profile`, { body, ...options });
  }
}

export interface CloneHeadshot {
  large?: string;

  medium?: string;

  small?: string;
}

export interface CloneProfile {
  id: string;

  createdAt: string;

  generation: string;

  name: string;

  screenName: string;

  status: string;

  updatedAt: string;

  appearanceDesc?: string;

  birthdate?: string;

  careerDesc?: string;

  childhoodDesc?: string;

  currentCity?: string;

  educationDesc?: string;

  familyDesc?: string;

  financesDesc?: string;

  gender?: string;

  headshot?: CloneHeadshot;

  hometown?: string;

  interestsDesc?: string;

  isEnabled?: boolean;

  language?: string;

  lifestyleDesc?: string;

  maritalStatus?: string;

  nationality?: string;

  occupation?: string;

  principlesDesc?: string;

  races?: Array<string>;

  socialCircleDesc?: string;

  socialHobbiesDesc?: string;

  sportsDesc?: string;

  state?: CloneProfile.State;

  travelDesc?: string;

  unusualHobbiesDesc?: string;

  voiceUrl?: string;
}

export namespace CloneProfile {
  export interface State {
    /**
     * Generation status: none, generating, ready, error
     */
    headshot: 'none' | 'generating' | 'ready' | 'error';

    /**
     * Generation status: none, generating, ready, error
     */
    voice: 'none' | 'generating' | 'ready' | 'error';
  }
}

export interface ProfileUpdateParams {
  appearanceDesc?: string;

  birthdate?: string;

  careerDesc?: string;

  childhoodDesc?: string;

  currentCity?: string;

  educationDesc?: string;

  familyDesc?: string;

  financesDesc?: string;

  gender?: string;

  hometown?: string;

  interestsDesc?: string;

  isEnabled?: boolean;

  language?: string;

  lifestyleDesc?: string;

  maritalStatus?: string;

  name?: string;

  nationality?: string;

  occupation?: string;

  principlesDesc?: string;

  races?: Array<string>;

  screenName?: string;

  socialCircleDesc?: string;

  socialHobbiesDesc?: string;

  sportsDesc?: string;

  travelDesc?: string;

  unusualHobbiesDesc?: string;
}

export declare namespace Profile {
  export {
    type CloneHeadshot as CloneHeadshot,
    type CloneProfile as CloneProfile,
    type ProfileUpdateParams as ProfileUpdateParams,
  };
}

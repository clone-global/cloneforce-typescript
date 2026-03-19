// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActivityAPI from './activity';
import {
  Activity,
  ActivityDeleteParams,
  ActivityDeleteResponse,
  ActivityListResponse,
  ActivityRetrieveParams,
  ActivityRetrieveResponse,
} from './activity';
import * as FilesAPI from './files';
import {
  FileCreateParams,
  FileDeleteParams,
  FileDeleteResponse,
  FileListResponse,
  FileRetrieveParams,
  Files,
  KBFileSummary,
} from './files';
import * as GalleryAPI from './gallery';
import {
  Gallery,
  GalleryCreateParams,
  GalleryDeleteParams,
  GalleryDeleteResponse,
  GalleryItemSummary,
  GalleryListParams,
  GalleryListResponse,
  GalleryRetrieveParams,
} from './gallery';
import * as HeadshotAPI from './headshot';
import { Headshot, HeadshotGenerateParams } from './headshot';
import * as ProfileAPI from './profile';
import { CloneHeadshot, CloneProfile, Profile, ProfilePatchAllParams } from './profile';
import * as TasksAPI from './tasks';
import {
  TaskCreateParams,
  TaskDeleteParams,
  TaskDeleteResponse,
  TaskListParams,
  TaskListResponse,
  TaskRecurrence,
  TaskRetrieveParams,
  TaskSummary,
  TaskUpdateParams,
  Tasks,
} from './tasks';
import * as VoiceAPI from './voice';
import { GenerateRequest, GenerationStatus, Voice, VoiceGenerateParams } from './voice';
import * as IntegrationsAPI from './integrations/integrations';
import {
  IntegrationDeleteParams,
  IntegrationDeleteResponse,
  IntegrationListParams,
  IntegrationListResponse,
  IntegrationPhoneParams,
  IntegrationPhoneResponse,
  IntegrationRetrieveParams,
  IntegrationRetrieveSetupParams,
  IntegrationRetrieveSetupResponse,
  IntegrationSummary,
  Integrations,
} from './integrations/integrations';
import * as SkillsAPI from './skills/skills';
import {
  SkillCreateParams,
  SkillDeleteParams,
  SkillDeleteResponse,
  SkillListParams,
  SkillListResponse,
  SkillSummary,
  SkillUpdateParams,
  Skills,
} from './skills/skills';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Clone profile management and asset generation
 */
export class Clones extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  voice: VoiceAPI.Voice = new VoiceAPI.Voice(this._client);
  headshot: HeadshotAPI.Headshot = new HeadshotAPI.Headshot(this._client);
  skills: SkillsAPI.Skills = new SkillsAPI.Skills(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  gallery: GalleryAPI.Gallery = new GalleryAPI.Gallery(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  activity: ActivityAPI.Activity = new ActivityAPI.Activity(this._client);

  /**
   * Returns all clones in the organization, ordered by creation date descending.
   */
  list(options?: RequestOptions): APIPromise<CloneListResponse> {
    return this._client.get('/api/v1/clones', options);
  }
}

export interface CloneListResponse {
  data: Array<CloneListResponse.Data>;
}

export namespace CloneListResponse {
  export interface Data {
    id: string;

    createdAt: string;

    generation: string;

    name: string;

    screenName: string;

    status: string;

    headshot?: ProfileAPI.CloneHeadshot;

    isEnabled?: boolean;
  }
}

Clones.Profile = Profile;
Clones.Voice = Voice;
Clones.Headshot = Headshot;
Clones.Skills = Skills;
Clones.Tasks = Tasks;
Clones.Files = Files;
Clones.Gallery = Gallery;
Clones.Integrations = Integrations;
Clones.Activity = Activity;

export declare namespace Clones {
  export { type CloneListResponse as CloneListResponse };

  export {
    Profile as Profile,
    type CloneHeadshot as CloneHeadshot,
    type CloneProfile as CloneProfile,
    type ProfilePatchAllParams as ProfilePatchAllParams,
  };

  export {
    Voice as Voice,
    type GenerateRequest as GenerateRequest,
    type GenerationStatus as GenerationStatus,
    type VoiceGenerateParams as VoiceGenerateParams,
  };

  export { Headshot as Headshot, type HeadshotGenerateParams as HeadshotGenerateParams };

  export {
    Skills as Skills,
    type SkillSummary as SkillSummary,
    type SkillListResponse as SkillListResponse,
    type SkillDeleteResponse as SkillDeleteResponse,
    type SkillCreateParams as SkillCreateParams,
    type SkillUpdateParams as SkillUpdateParams,
    type SkillListParams as SkillListParams,
    type SkillDeleteParams as SkillDeleteParams,
  };

  export {
    Tasks as Tasks,
    type TaskRecurrence as TaskRecurrence,
    type TaskSummary as TaskSummary,
    type TaskListResponse as TaskListResponse,
    type TaskDeleteResponse as TaskDeleteResponse,
    type TaskCreateParams as TaskCreateParams,
    type TaskRetrieveParams as TaskRetrieveParams,
    type TaskUpdateParams as TaskUpdateParams,
    type TaskListParams as TaskListParams,
    type TaskDeleteParams as TaskDeleteParams,
  };

  export {
    Files as Files,
    type KBFileSummary as KBFileSummary,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileDeleteParams as FileDeleteParams,
  };

  export {
    Gallery as Gallery,
    type GalleryItemSummary as GalleryItemSummary,
    type GalleryListResponse as GalleryListResponse,
    type GalleryDeleteResponse as GalleryDeleteResponse,
    type GalleryCreateParams as GalleryCreateParams,
    type GalleryRetrieveParams as GalleryRetrieveParams,
    type GalleryListParams as GalleryListParams,
    type GalleryDeleteParams as GalleryDeleteParams,
  };

  export {
    Integrations as Integrations,
    type IntegrationSummary as IntegrationSummary,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationDeleteResponse as IntegrationDeleteResponse,
    type IntegrationPhoneResponse as IntegrationPhoneResponse,
    type IntegrationRetrieveSetupResponse as IntegrationRetrieveSetupResponse,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
    type IntegrationPhoneParams as IntegrationPhoneParams,
    type IntegrationRetrieveSetupParams as IntegrationRetrieveSetupParams,
  };

  export {
    Activity as Activity,
    type ActivityRetrieveResponse as ActivityRetrieveResponse,
    type ActivityListResponse as ActivityListResponse,
    type ActivityDeleteResponse as ActivityDeleteResponse,
    type ActivityRetrieveParams as ActivityRetrieveParams,
    type ActivityDeleteParams as ActivityDeleteParams,
  };
}

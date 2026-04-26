// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectionsAPI from './connections';
import { ConnectionCreateOAuthParams, ConnectionCreateParams, ConnectionDeleteResponse, ConnectionDetail, ConnectionListParams, ConnectionListResponse, ConnectionStatus, ConnectionUpdateParams, Connections, OAuthProvision } from './connections';
import * as SkillsAPI from './skills';
import { SkillRetrieveParams, SkillRetrieveResponse, SkillSearchParams, SkillSearchResponse, Skills } from './skills';
import * as ClonesAPI from './clones/clones';
import { CloneListResponse, Clones } from './clones/clones';
import * as IntegrationsAPI from './integrations/integrations';
import { Integrations } from './integrations/integrations';

export class V1 extends APIResource {
  clones: ClonesAPI.Clones = new ClonesAPI.Clones(this._client);
  skills: SkillsAPI.Skills = new SkillsAPI.Skills(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
}

V1.Clones = Clones;
V1.Skills = Skills;
V1.Integrations = Integrations;
V1.Connections = Connections;

export declare namespace V1 {
  export {
    Clones as Clones,
    type CloneListResponse as CloneListResponse
  };

  export {
    Skills as Skills,
    type SkillRetrieveResponse as SkillRetrieveResponse,
    type SkillSearchResponse as SkillSearchResponse,
    type SkillRetrieveParams as SkillRetrieveParams,
    type SkillSearchParams as SkillSearchParams
  };

  export {
    Integrations as Integrations
  };

  export {
    Connections as Connections,
    type ConnectionDetail as ConnectionDetail,
    type ConnectionStatus as ConnectionStatus,
    type OAuthProvision as OAuthProvision,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionDeleteResponse as ConnectionDeleteResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionUpdateParams as ConnectionUpdateParams,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionCreateOAuthParams as ConnectionCreateOAuthParams
  };
}

# V1

## Clones

Types:

- <code><a href="./src/resources/v1/clones/clones.ts">CloneListResponse</a></code>

Methods:

- <code title="get /public/v1/clones">client.v1.clones.<a href="./src/resources/v1/clones/clones.ts">list</a>() -> CloneListResponse</code>

### Profile

Types:

- <code><a href="./src/resources/v1/clones/profile.ts">CloneHeadshot</a></code>
- <code><a href="./src/resources/v1/clones/profile.ts">CloneProfile</a></code>

Methods:

- <code title="get /public/v1/clones/{cloneId}/profile">client.v1.clones.profile.<a href="./src/resources/v1/clones/profile.ts">retrieve</a>(cloneID) -> CloneProfile</code>
- <code title="patch /public/v1/clones/{cloneId}/profile">client.v1.clones.profile.<a href="./src/resources/v1/clones/profile.ts">update</a>(cloneID, { ...params }) -> CloneProfile</code>

### Voice

Types:

- <code><a href="./src/resources/v1/clones/voice.ts">GenerateRequest</a></code>
- <code><a href="./src/resources/v1/clones/voice.ts">GenerationStatus</a></code>

Methods:

- <code title="post /public/v1/clones/{cloneId}/voice/generate">client.v1.clones.voice.<a href="./src/resources/v1/clones/voice.ts">generate</a>(cloneID, { ...params }) -> GenerationStatus</code>

### Headshot

Methods:

- <code title="post /public/v1/clones/{cloneId}/headshot/generate">client.v1.clones.headshot.<a href="./src/resources/v1/clones/headshot.ts">generate</a>(cloneID, { ...params }) -> GenerationStatus</code>

### Skills

Types:

- <code><a href="./src/resources/v1/clones/skills/skills.ts">SkillSummary</a></code>
- <code><a href="./src/resources/v1/clones/skills/skills.ts">SkillListResponse</a></code>
- <code><a href="./src/resources/v1/clones/skills/skills.ts">SkillDeleteResponse</a></code>

Methods:

- <code title="post /public/v1/clones/{cloneId}/skills">client.v1.clones.skills.<a href="./src/resources/v1/clones/skills/skills.ts">create</a>(cloneID, { ...params }) -> SkillSummary</code>
- <code title="patch /public/v1/clones/{cloneId}/skills/{skillName}">client.v1.clones.skills.<a href="./src/resources/v1/clones/skills/skills.ts">update</a>(skillName, { ...params }) -> SkillSummary</code>
- <code title="get /public/v1/clones/{cloneId}/skills">client.v1.clones.skills.<a href="./src/resources/v1/clones/skills/skills.ts">list</a>(cloneID, { ...params }) -> SkillListResponse</code>
- <code title="delete /public/v1/clones/{cloneId}/skills/{skillName}">client.v1.clones.skills.<a href="./src/resources/v1/clones/skills/skills.ts">delete</a>(skillName, { ...params }) -> SkillDeleteResponse</code>

#### Connections

Types:

- <code><a href="./src/resources/v1/clones/skills/connections.ts">SkillConnectionInfo</a></code>
- <code><a href="./src/resources/v1/clones/skills/connections.ts">ConnectionListResponse</a></code>

Methods:

- <code title="put /public/v1/clones/{cloneId}/skills/{skillName}/connections/{settingName}">client.v1.clones.skills.connections.<a href="./src/resources/v1/clones/skills/connections.ts">update</a>(settingName, { ...params }) -> SkillConnectionInfo</code>
- <code title="get /public/v1/clones/{cloneId}/skills/{skillName}/connections">client.v1.clones.skills.connections.<a href="./src/resources/v1/clones/skills/connections.ts">list</a>(skillName, { ...params }) -> ConnectionListResponse</code>

### Tasks

Types:

- <code><a href="./src/resources/v1/clones/tasks.ts">TaskRecurrence</a></code>
- <code><a href="./src/resources/v1/clones/tasks.ts">TaskSummary</a></code>
- <code><a href="./src/resources/v1/clones/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/v1/clones/tasks.ts">TaskDeleteResponse</a></code>

Methods:

- <code title="post /public/v1/clones/{cloneId}/tasks">client.v1.clones.tasks.<a href="./src/resources/v1/clones/tasks.ts">create</a>(cloneID, { ...params }) -> TaskSummary</code>
- <code title="get /public/v1/clones/{cloneId}/tasks/{taskId}">client.v1.clones.tasks.<a href="./src/resources/v1/clones/tasks.ts">retrieve</a>(taskID, { ...params }) -> TaskSummary</code>
- <code title="patch /public/v1/clones/{cloneId}/tasks/{taskId}">client.v1.clones.tasks.<a href="./src/resources/v1/clones/tasks.ts">update</a>(taskID, { ...params }) -> TaskSummary</code>
- <code title="get /public/v1/clones/{cloneId}/tasks">client.v1.clones.tasks.<a href="./src/resources/v1/clones/tasks.ts">list</a>(cloneID, { ...params }) -> TaskListResponse</code>
- <code title="delete /public/v1/clones/{cloneId}/tasks/{taskId}">client.v1.clones.tasks.<a href="./src/resources/v1/clones/tasks.ts">delete</a>(taskID, { ...params }) -> TaskDeleteResponse</code>

### Files

Types:

- <code><a href="./src/resources/v1/clones/files.ts">KBFileSummary</a></code>
- <code><a href="./src/resources/v1/clones/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/v1/clones/files.ts">FileDeleteResponse</a></code>

Methods:

- <code title="post /public/v1/clones/{cloneId}/files">client.v1.clones.files.<a href="./src/resources/v1/clones/files.ts">create</a>(cloneID, { ...params }) -> KBFileSummary</code>
- <code title="get /public/v1/clones/{cloneId}/files/{fileId}">client.v1.clones.files.<a href="./src/resources/v1/clones/files.ts">retrieve</a>(fileID, { ...params }) -> KBFileSummary</code>
- <code title="get /public/v1/clones/{cloneId}/files">client.v1.clones.files.<a href="./src/resources/v1/clones/files.ts">list</a>(cloneID) -> FileListResponse</code>
- <code title="delete /public/v1/clones/{cloneId}/files/{fileId}">client.v1.clones.files.<a href="./src/resources/v1/clones/files.ts">delete</a>(fileID, { ...params }) -> FileDeleteResponse</code>

### Gallery

Types:

- <code><a href="./src/resources/v1/clones/gallery.ts">GalleryItemSummary</a></code>
- <code><a href="./src/resources/v1/clones/gallery.ts">GalleryListResponse</a></code>
- <code><a href="./src/resources/v1/clones/gallery.ts">GalleryDeleteResponse</a></code>

Methods:

- <code title="post /public/v1/clones/{cloneId}/gallery">client.v1.clones.gallery.<a href="./src/resources/v1/clones/gallery.ts">create</a>(cloneID, { ...params }) -> GalleryItemSummary</code>
- <code title="get /public/v1/clones/{cloneId}/gallery/{itemId}">client.v1.clones.gallery.<a href="./src/resources/v1/clones/gallery.ts">retrieve</a>(itemID, { ...params }) -> GalleryItemSummary</code>
- <code title="get /public/v1/clones/{cloneId}/gallery">client.v1.clones.gallery.<a href="./src/resources/v1/clones/gallery.ts">list</a>(cloneID, { ...params }) -> GalleryListResponse</code>
- <code title="delete /public/v1/clones/{cloneId}/gallery/{itemId}">client.v1.clones.gallery.<a href="./src/resources/v1/clones/gallery.ts">delete</a>(itemID, { ...params }) -> GalleryDeleteResponse</code>

### Integrations

Types:

- <code><a href="./src/resources/v1/clones/integrations/integrations.ts">IntegrationSummary</a></code>
- <code><a href="./src/resources/v1/clones/integrations/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/v1/clones/integrations/integrations.ts">IntegrationDeleteResponse</a></code>
- <code><a href="./src/resources/v1/clones/integrations/integrations.ts">IntegrationCreatePhoneResponse</a></code>
- <code><a href="./src/resources/v1/clones/integrations/integrations.ts">IntegrationGetSetupURLResponse</a></code>

Methods:

- <code title="get /public/v1/clones/{cloneId}/integrations/{integrationId}">client.v1.clones.integrations.<a href="./src/resources/v1/clones/integrations/integrations.ts">retrieve</a>(integrationID, { ...params }) -> IntegrationSummary</code>
- <code title="get /public/v1/clones/{cloneId}/integrations">client.v1.clones.integrations.<a href="./src/resources/v1/clones/integrations/integrations.ts">list</a>(cloneID, { ...params }) -> IntegrationListResponse</code>
- <code title="delete /public/v1/clones/{cloneId}/integrations/{integrationId}">client.v1.clones.integrations.<a href="./src/resources/v1/clones/integrations/integrations.ts">delete</a>(integrationID, { ...params }) -> IntegrationDeleteResponse</code>
- <code title="post /public/v1/clones/{cloneId}/integrations/phone">client.v1.clones.integrations.<a href="./src/resources/v1/clones/integrations/integrations.ts">createPhone</a>(cloneID, { ...params }) -> IntegrationCreatePhoneResponse</code>
- <code title="get /public/v1/clones/{cloneId}/integrations/{integrationId}/setup">client.v1.clones.integrations.<a href="./src/resources/v1/clones/integrations/integrations.ts">getSetupURL</a>(integrationID, { ...params }) -> IntegrationGetSetupURLResponse</code>

#### Slack

Types:

- <code><a href="./src/resources/v1/clones/integrations/slack.ts">SlackIntegration</a></code>

Methods:

- <code title="post /public/v1/clones/{cloneId}/integrations/slack">client.v1.clones.integrations.slack.<a href="./src/resources/v1/clones/integrations/slack.ts">create</a>(cloneID) -> SlackIntegration</code>
- <code title="patch /public/v1/clones/{cloneId}/integrations/slack/{integrationId}">client.v1.clones.integrations.slack.<a href="./src/resources/v1/clones/integrations/slack.ts">update</a>(integrationID, { ...params }) -> SlackIntegration</code>

#### Msteams

Types:

- <code><a href="./src/resources/v1/clones/integrations/msteams.ts">MsTeamsTeamRef</a></code>
- <code><a href="./src/resources/v1/clones/integrations/msteams.ts">MsteamTeamsResponse</a></code>

Methods:

- <code title="post /public/v1/clones/{cloneId}/integrations/msteams/{integrationId}/teams">client.v1.clones.integrations.msteams.<a href="./src/resources/v1/clones/integrations/msteams.ts">teams</a>(integrationID, { ...params }) -> MsteamTeamsResponse</code>

### Activity

Types:

- <code><a href="./src/resources/v1/clones/activity.ts">ActivityRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/clones/activity.ts">ActivityListResponse</a></code>
- <code><a href="./src/resources/v1/clones/activity.ts">ActivityDeleteResponse</a></code>

Methods:

- <code title="get /public/v1/clones/{cloneId}/activity/{activityId}">client.v1.clones.activity.<a href="./src/resources/v1/clones/activity.ts">retrieve</a>(activityID, { ...params }) -> ActivityRetrieveResponse</code>
- <code title="get /public/v1/clones/{cloneId}/activity">client.v1.clones.activity.<a href="./src/resources/v1/clones/activity.ts">list</a>(cloneID) -> ActivityListResponse</code>
- <code title="delete /public/v1/clones/{cloneId}/activity/{activityId}">client.v1.clones.activity.<a href="./src/resources/v1/clones/activity.ts">delete</a>(activityID, { ...params }) -> ActivityDeleteResponse</code>

### Chats

Types:

- <code><a href="./src/resources/v1/clones/chats/chats.ts">ChatCompletionResponse</a></code>
- <code><a href="./src/resources/v1/clones/chats/chats.ts">CreateChatResponse</a></code>

Methods:

- <code title="post /public/v1/clones/{cloneId}/chats">client.v1.clones.chats.<a href="./src/resources/v1/clones/chats/chats.ts">create</a>(cloneID, { ...params }) -> CreateChatResponse</code>

#### Completions

Types:

- <code><a href="./src/resources/v1/clones/chats/completions.ts">ChatCompletionChunk</a></code>
- <code><a href="./src/resources/v1/clones/chats/completions.ts">ChatCompletionCompleted</a></code>

Methods:

- <code title="post /public/v1/clones/{cloneId}/chats/{chatId}/completions">client.v1.clones.chats.completions.<a href="./src/resources/v1/clones/chats/completions.ts">create</a>(chatID, { ...params }) -> ChatCompletionResponse</code>

## Skills

Types:

- <code><a href="./src/resources/v1/skills.ts">SkillRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/skills.ts">SkillSearchResponse</a></code>

Methods:

- <code title="get /public/v1/skills/{skillId}">client.v1.skills.<a href="./src/resources/v1/skills.ts">retrieve</a>(skillID, { ...params }) -> SkillRetrieveResponse</code>
- <code title="get /public/v1/skills/search">client.v1.skills.<a href="./src/resources/v1/skills.ts">search</a>({ ...params }) -> SkillSearchResponse</code>

## Integrations

### Phone

Types:

- <code><a href="./src/resources/v1/integrations/phone.ts">PhoneListAvailableResponse</a></code>

Methods:

- <code title="get /public/v1/integrations/phone/available">client.v1.integrations.phone.<a href="./src/resources/v1/integrations/phone.ts">listAvailable</a>({ ...params }) -> PhoneListAvailableResponse</code>

## Connections

Types:

- <code><a href="./src/resources/v1/connections.ts">ConnectionDetail</a></code>
- <code><a href="./src/resources/v1/connections.ts">ConnectionStatus</a></code>
- <code><a href="./src/resources/v1/connections.ts">OAuthProvision</a></code>
- <code><a href="./src/resources/v1/connections.ts">ConnectionListResponse</a></code>
- <code><a href="./src/resources/v1/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="post /public/v1/connections">client.v1.connections.<a href="./src/resources/v1/connections.ts">create</a>({ ...params }) -> ConnectionDetail</code>
- <code title="get /public/v1/connections/{connectionId}">client.v1.connections.<a href="./src/resources/v1/connections.ts">retrieve</a>(connectionID) -> ConnectionDetail</code>
- <code title="patch /public/v1/connections/{connectionId}">client.v1.connections.<a href="./src/resources/v1/connections.ts">update</a>(connectionID, { ...params }) -> ConnectionDetail</code>
- <code title="get /public/v1/connections">client.v1.connections.<a href="./src/resources/v1/connections.ts">list</a>({ ...params }) -> ConnectionListResponse</code>
- <code title="delete /public/v1/connections/{connectionId}">client.v1.connections.<a href="./src/resources/v1/connections.ts">delete</a>(connectionID) -> ConnectionDeleteResponse</code>
- <code title="post /public/v1/connections/oauth">client.v1.connections.<a href="./src/resources/v1/connections.ts">createOAuth</a>({ ...params }) -> OAuthProvision</code>
- <code title="get /public/v1/connections/{connectionId}/status">client.v1.connections.<a href="./src/resources/v1/connections.ts">getStatus</a>(connectionID) -> ConnectionStatus</code>
- <code title="post /public/v1/connections/{connectionId}/refresh">client.v1.connections.<a href="./src/resources/v1/connections.ts">refresh</a>(connectionID) -> ConnectionStatus</code>
- <code title="post /public/v1/connections/{connectionId}/reprovision">client.v1.connections.<a href="./src/resources/v1/connections.ts">reprovisionOAuth</a>(connectionID) -> OAuthProvision</code>

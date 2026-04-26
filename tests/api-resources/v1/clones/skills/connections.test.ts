// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloneforce from 'cloneforce';

const client = new Cloneforce({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource connections', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.clones.skills.connections.update('settingName', {
    cloneId: 'cloneId',
    skillName: 'skillName',
    connectionId: 'connectionId',
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.clones.skills.connections.update('settingName', {
    cloneId: 'cloneId',
    skillName: 'skillName',
    connectionId: 'connectionId',
  });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.clones.skills.connections.list('skillName', { cloneId: 'cloneId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.v1.clones.skills.connections.list('skillName', { cloneId: 'cloneId' });
  });
});

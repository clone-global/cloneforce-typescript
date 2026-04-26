// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloneforce from 'cloneforce';

const client = new Cloneforce({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource tasks', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.clones.tasks.create('cloneId', {
    prompt: 'prompt',
    startsAt: '2019-12-27T18:11:19.117Z',
    title: 'title',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.clones.tasks.create('cloneId', {
    prompt: 'prompt',
    startsAt: '2019-12-27T18:11:19.117Z',
    title: 'title',
    color: 'color',
    isRecurring: true,
    recurrence: {
    interval: 0,
    pattern: 'Minutely',
    endsAt: '2019-12-27T18:11:19.117Z',
  },
  });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.clones.tasks.retrieve('taskId', { cloneId: 'cloneId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v1.clones.tasks.retrieve('taskId', { cloneId: 'cloneId' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.clones.tasks.update('taskId', { cloneId: 'cloneId' });
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
    const response = await client.v1.clones.tasks.update('taskId', {
    cloneId: 'cloneId',
    color: 'color',
    isRecurring: true,
    prompt: 'prompt',
    recurrence: {
    interval: 0,
    pattern: 'Minutely',
    endsAt: '2019-12-27T18:11:19.117Z',
  },
    startsAt: '2019-12-27T18:11:19.117Z',
    title: 'title',
  });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.clones.tasks.list('cloneId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.clones.tasks.list('cloneId', { isRecurring: 'true' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloneforce.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.v1.clones.tasks.delete('taskId', { cloneId: 'cloneId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.v1.clones.tasks.delete('taskId', { cloneId: 'cloneId' });
  });
});

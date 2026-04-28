// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloneforce from 'cloneforce';

const client = new Cloneforce({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource voice', () => {
  // Mock server tests are disabled
  test.skip('generate', async () => {
    const responsePromise = client.v1.clones.voice.generate('cloneId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.clones.voice.generate(
        'cloneId',
        { additionalInstructions: 'additionalInstructions' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloneforce.NotFoundError);
  });
});

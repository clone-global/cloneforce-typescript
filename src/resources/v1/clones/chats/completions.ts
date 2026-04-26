// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CompletionsAPI from './completions';
import * as ChatsAPI from './chats';
import { APIPromise } from '../../../../core/api-promise';
import { Stream } from '../../../../core/streaming';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Chat sessions and completions
 */
export class Completions extends APIResource {
  /**
   * Sends a user message to the clone and returns the assistant's response.
   *
   * Set `stream: true` to receive the response as Server-Sent Events (SSE). SSE
   * events: `message.delta` (incremental text), `message.completed` (final message),
   * `done` (stream end).
   */
  create(chatID: string, params: CompletionCreateParamsNonStreaming, options?: RequestOptions): APIPromise<ChatsAPI.ChatCompletionResponse>
  create(chatID: string, params: CompletionCreateParamsStreaming, options?: RequestOptions): APIPromise<Stream<ChatCompletionChunk>>
  create(chatID: string, params: CompletionCreateParamsBase, options?: RequestOptions): APIPromise<Stream<ChatCompletionChunk> | ChatsAPI.ChatCompletionResponse>
  create(chatID: string, params: CompletionCreateParams, options?: RequestOptions): APIPromise<ChatsAPI.ChatCompletionResponse> | APIPromise<Stream<ChatCompletionChunk>> {
    const { cloneId, ...body } = params
    return this._client.post(path`/public/v1/clones/${cloneId}/chats/${chatID}/completions`, { body, ...options, stream: params.stream ?? false }) as APIPromise<ChatsAPI.ChatCompletionResponse> | APIPromise<Stream<ChatCompletionChunk>>;
  }
}

/**
 * SSE message.delta event payload
 */
export interface ChatCompletionChunk {
  id: string;

  delta?: ChatCompletionChunk.Delta;
}

export namespace ChatCompletionChunk {
  export interface Delta {
    content?: string;
  }
}

/**
 * SSE message.completed event payload
 */
export interface ChatCompletionCompleted {
  id: string;

  content: string;

  createdAt: string;

  role: string;
}

export type CompletionCreateParams = CompletionCreateParamsNonStreaming | CompletionCreateParamsStreaming

export interface CompletionCreateParamsBase {
  /**
   * Path param
   */
  cloneId: string;

  /**
   * Body param: The user message to send to the clone
   */
  message: string;

  /**
   * Body param: If true, response is streamed as SSE events
   */
  stream?: boolean;
}

export namespace CompletionCreateParams {
  export type CompletionCreateParamsNonStreaming = CompletionsAPI.CompletionCreateParamsNonStreaming
  export type CompletionCreateParamsStreaming = CompletionsAPI.CompletionCreateParamsStreaming
}

export interface CompletionCreateParamsNonStreaming extends CompletionCreateParamsBase {
  /**
   * Body param: If true, response is streamed as SSE events
   */
  stream?: false;
}

export interface CompletionCreateParamsStreaming extends CompletionCreateParamsBase {
  /**
   * Body param: If true, response is streamed as SSE events
   */
  stream: true;
}

export declare namespace Completions {
  export {
    type ChatCompletionChunk as ChatCompletionChunk,
    type ChatCompletionCompleted as ChatCompletionCompleted,
    type CompletionCreateParams as CompletionCreateParams,
    type CompletionCreateParamsNonStreaming as CompletionCreateParamsNonStreaming,
    type CompletionCreateParamsStreaming as CompletionCreateParamsStreaming
  };
}

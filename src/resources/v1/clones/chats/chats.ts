// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CompletionsAPI from './completions';
import {
  ChatCompletionChunk,
  ChatCompletionCompleted,
  CompletionCreateParams,
  CompletionCreateParamsNonStreaming,
  CompletionCreateParamsStreaming,
  Completions,
} from './completions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * Chat sessions and completions
 */
export class Chats extends APIResource {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);

  /**
   * Create a new chat session
   */
  create(cloneID: string, body: ChatCreateParams, options?: RequestOptions): APIPromise<CreateChatResponse> {
    return this._client.post(path`/public/v1/clones/${cloneID}/chats`, { body, ...options });
  }
}

export interface ChatCompletionResponse {
  id: string;

  chatId: string;

  content: string;

  createdAt: string;

  role: string;
}

export interface CreateChatResponse {
  id: string;

  cloneId: string;

  createdAt: string;

  title: string;
}

export interface ChatCreateParams {
  /**
   * Optional title for the chat session
   */
  title?: string;
}

Chats.Completions = Completions;

export declare namespace Chats {
  export {
    type ChatCompletionResponse as ChatCompletionResponse,
    type CreateChatResponse as CreateChatResponse,
    type ChatCreateParams as ChatCreateParams,
  };

  export {
    Completions as Completions,
    type ChatCompletionChunk as ChatCompletionChunk,
    type ChatCompletionCompleted as ChatCompletionCompleted,
    type CompletionCreateParams as CompletionCreateParams,
    type CompletionCreateParamsNonStreaming as CompletionCreateParamsNonStreaming,
    type CompletionCreateParamsStreaming as CompletionCreateParamsStreaming,
  };
}

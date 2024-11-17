import { Inject, Injectable } from '@nestjs/common';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import {
  CreateStory,
  CreateStoryMutation,
  CreateStoryMutationVariables,
} from '../../__generated__/query';
import { APOLLO_CLIENT } from '../../keystone.const';

@Injectable()
export class StoryService {
  public constructor(
    @Inject(APOLLO_CLIENT) private client: ApolloClient<NormalizedCacheObject>,
  ) {}

  public async create(variables: CreateStoryMutationVariables) {
    return this.client.mutate<
      CreateStoryMutation,
      CreateStoryMutationVariables
    >({
      variables,
      mutation: CreateStory,
    });
  }
}

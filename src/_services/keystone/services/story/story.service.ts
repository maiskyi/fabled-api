import { Inject, Injectable } from '@nestjs/common';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import {
  CreateStory,
  CreateStoryMutation,
  CreateStoryMutationVariables,
} from '../../__generated__/query';
import { APOLLO_CLIENT } from '../../keystone.const';

import { CreateStoryParams } from './story.types';

@Injectable()
export class StoryService {
  public constructor(
    @Inject(APOLLO_CLIENT) private client: ApolloClient<NormalizedCacheObject>,
  ) {}

  public async create({
    characterId,
    firebaseUserId,
    moralLessonId,
    placeOfEventId,
    promptId,
    readTime,
    deviceId,
    childAge,
    childGender,
    childName,
  }: CreateStoryParams) {
    const character = (() => {
      if (characterId) {
        return {
          connect: {
            id: characterId,
          },
        };
      }
    })();

    return this.client.mutate<
      CreateStoryMutation,
      CreateStoryMutationVariables
    >({
      variables: {
        data: {
          deviceId,
          character,
          childAge,
          childGender,
          childName,
          moralLesson: {
            connect: {
              id: moralLessonId,
            },
          },
          placeOfEvent: {
            connect: {
              id: placeOfEventId,
            },
          },
          prompt: {
            connect: {
              id: promptId,
            },
          },
          readTime,
          firebaseUserId,
        },
      },
      mutation: CreateStory,
    });
  }
}

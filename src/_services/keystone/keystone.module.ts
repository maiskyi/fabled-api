import { DynamicModule, Module } from '@nestjs/common';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core';
import { HttpLink } from '@apollo/client/link/http';

import { StoryService } from './services/story';
import { ContentfulConfig } from './keystone.types';
import { APOLLO_CLIENT } from './keystone.const';

@Module({
  providers: [StoryService],
  exports: [StoryService],
})
export class KeystoneModule {
  static forRoot({ schemaUrl, apiKey }: ContentfulConfig): DynamicModule {
    return {
      global: true,
      module: KeystoneModule,
      providers: [
        {
          provide: APOLLO_CLIENT,
          useFactory: (): ApolloClient<NormalizedCacheObject> => {
            return new ApolloClient({
              link: new HttpLink({
                uri: schemaUrl,
                fetch,
                headers: {
                  Authorization: apiKey,
                },
              }),
              cache: new InMemoryCache(),
            });
          },
        },
      ],
    };
  }
}

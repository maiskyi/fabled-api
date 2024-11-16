import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'http://localhost:3000/api/graphql': {},
    },
  ],
  ignoreNoDocuments: true,
  generates: {
    './src/_services/keystone/__generated__/query.ts': {
      config: {
        documentVariableSuffix: 'Document',
      },
      documents: ['./src/_services/keystone/documents/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-document-nodes',
      ],
    },
  },
};

export default config;

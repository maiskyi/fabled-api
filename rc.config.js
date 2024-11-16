/* eslint-disable @typescript-eslint/no-require-imports */
const { resolve } = require('path');

const { generateApi } = require('swagger-typescript-api');

generateApi({
  name: 'revenue-cat-api.ts',
  output: resolve(process.cwd(), './src/_services/revenue-cat/__generated__'),
  input: resolve(
    process.cwd(),
    './src/_services/revenue-cat/revenue-cat.swagger.yaml',
  ),
  modular: true,
  cleanOutput: true,
  moduleNameFirstTag: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractResponseBody: true,
  extractResponseError: true,
  unwrapResponseData: true,
  httpClientType: 'axios',
  singleHttpClient: true,
});

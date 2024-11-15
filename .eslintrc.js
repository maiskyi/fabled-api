module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'index',
          'sibling',
          'object',
          'type',
          'internal',
        ],
        'newlines-between': 'always',
        // pathGroups: [
        //   {
        //     group: 'builtin',
        //     pattern:
        //       '{qs,axios,use-context-selector,classnames,i18next,lodash,react,react-*,react-dom/*, */react-*}',
        //     patternOptions: { partial: true },
        //     position: 'before',
        //   },
        //   {
        //     group: 'internal',
        //     pattern: '*.{css,sass,less,scss,pcss,styl}',
        //     patternOptions: { matchBase: true },
        //     position: 'before',
        //   },
        // ],
        pathGroupsExcludedImportTypes: ['react'],
        warnOnUnassignedImports: true,
      },
    ],
  },
};

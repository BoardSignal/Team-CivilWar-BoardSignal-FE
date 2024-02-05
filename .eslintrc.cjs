module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', 'vite.config.ts', '*.cjs', '*.mjs', '*.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'prettier', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'space-infix-ops': 'error',
    eqeqeq: 'error',
    'prefer-arrow-callback': 'error',
    'no-plusplus': 'error',
    'no-unneeded-ternary': 'error',
    'no-prototype-builtins': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^.*Props$',
          match: true,
        },
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase'],
        types: ['function'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has'],
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
      },
      {
        format: ['PascalCase'],
        selector: 'typeAlias',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'const', next: 'return' },
    ],
  },
};

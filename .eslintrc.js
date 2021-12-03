module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript/base', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-undef': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'consistent-return': 0,
    'no-console': 0,
    'no-else-return': 0,
  },
};

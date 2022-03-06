module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'prettier/prettier': true,
    'alpha-value-notation': null,
    'color-function-notation': null,
    'selector-class-pattern': null,
  },
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.{js,jsx,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
    {
      files: ['**/*.{html,svelte,vue}'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.md'],
      customSyntax: 'postcss-markdown',
    },
  ],
};

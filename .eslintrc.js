module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      modules: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react'],
  rules: {
    // Stylistic
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { after: true, before: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { after: true, before: false }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    curly: ['error', 'multi-line', 'consistent'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'always', { null: 'never' }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'generator-star-spacing': ['error', { after: true, before: false }],
    'key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'strict' }],
    'keyword-spacing': ['error', { after: true, before: true }],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', {
      code: 100,
      ignorePattern: '^import',
      ignoreComments: true,
      ignoreUrls: true,
    }],
    'max-params': ['error', 5],
    'new-parens': ['error'],
    'no-array-constructor': ['error'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': ['error', 'except-parens'],
    'no-const-assign': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty-character-class': ['error'],
    'no-eval': ['error', { allowIndirect: false }],
    'no-extra-parens': [
      'error',
      'all',
      { conditionalAssign: false, nestedBinaryExpressions: false },
    ],
    'no-extra-semi': ['error'],
    'no-fallthrough': ['error'],
    'no-floating-decimal': ['error'],
    'no-global-assign': ['error'],
    'no-implicit-coercion': ['error', { allow: [], boolean: true, number: true, string: true }],
    'no-invalid-regexp': ['error', { allowConstructorFlags: ['g', 'i', 'm', 'u', 'y'] }],
    'no-irregular-whitespace': ['error', { skipComments: false }],
    'no-lonely-if': ['error'],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multi-str': ['error'],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],
    'no-negated-condition': ['error'],
    'no-new-object': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': ['error', { props: false }],
    'no-path-concat': ['error'],
    'no-plusplus': ['error'],
    'no-prototype-builtins': ['error'],
    'no-regex-spaces': ['error'],
    'no-self-assign': ['error'],
    'no-sequences': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-sparse-arrays': ['error'],
    'no-tabs': ['error'],
    'no-throw-literal': ['error'],
    'no-trailing-spaces': ['error', { skipBlankLines: false }],
    'no-undef': ['error', { typeof: false }],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable': ['error'],
    'no-unsafe-negation': ['error'],
    'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none', vars: 'all' }],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'no-whitespace-before-property': ['error'],
    'no-with': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': ['error', { destructuring: 'any' }],
    'prefer-numeric-literals': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    'quote-props': ['error', 'as-needed', { keywords: false }],
    quotes: ['error', 'single', { avoidEscape: true }],
    radix: ['error', 'always'],
    semi: ['error', 'always', { omitLastInOneLineBlock: false }],
    'semi-spacing': ['error', { after: true, before: false }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'always' }],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error', { nonwords: false, overrides: {}, words: true }],
    'spaced-comment': ['error', 'always', { line: { exceptions: ['.'], markers: ['#', '.'] } }],
    strict: ['error', 'safe'],
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'wrap-iife': ['error', 'outside'],
    'yield-star-spacing': ['error', { after: true, before: false }],

    // React
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,
  },
};

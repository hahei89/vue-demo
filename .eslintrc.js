module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['standard', 'plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/html-indent': ['warn', 2, { alignAttributesVertically: false }],
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
    'vue/require-prop-types': 0,
    'vue/require-default-prop': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-v-html': 0,
    'vue/v-bind-style': 0,
    'vue/singleline-html-element-content-newline': 0,
    complexity: [1, 10],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '*.vue'
      ],
      env: {
        jest: true
      },
      rules: {
        indent: 'off'
      }
    }
  ]
}

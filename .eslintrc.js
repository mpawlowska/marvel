module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 0,
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0
  },
  env: {
    browser: true,
    jest: true
  }
};

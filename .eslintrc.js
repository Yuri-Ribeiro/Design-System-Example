module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    '@react-native-community',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/ban-types': 'off',
  },
  globals: { JSX: true },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};

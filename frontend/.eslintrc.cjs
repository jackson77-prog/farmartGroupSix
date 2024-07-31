module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Disable rule requiring React in scope for JSX (for React 17+)
    'no-undef': 'off', // Turn off 'no-undef' for jest globals
  },
  overrides: [
    {
      files: ['*.config.js', 'jest.config.js'], // Add 'jest.config.js' here
      env: {
        node: true, // Node environment for config files
      },
      rules: {
        'no-undef': 'off', // Turn off 'no-undef' for config files
      },
    },
  ],
};

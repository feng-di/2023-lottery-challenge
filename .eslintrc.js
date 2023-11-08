module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "no-console": "off",
    "prefer-template": "off"
  },
};

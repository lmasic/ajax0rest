module.exports = {
  extends: ['./.eslintrc.js'],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-debugger': 'error',
  },
};

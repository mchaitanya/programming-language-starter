// https://eslint.org/docs/latest/use/configure/
module.exports = {
  env: {
    node: true, // Adds Node.js global variables like module, require etc.
    es2021: true, // Adds ES2021 globals & sets the ecmaVersion parser option to 12
  },
  extends: ['eslint:recommended'],
  overrides: [
    // https://www.npmjs.com/package/eslint-plugin-jest#running-rules-only-on-test-related-files
    {
      files: ['**/*.spec.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};

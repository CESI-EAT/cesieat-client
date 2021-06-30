module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-cycle': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': [2, { props: false }],
  },
}

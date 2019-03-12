module.exports = {
  root: true,
  env: { node: true },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-callback-return': 'error',
    'arrow-body-style': [ 'error', 'always' ],
    'arrow-spacing': 'error',
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],
    'callback-return': 'error',
    'camelcase': [ 'error', { 'properties': 'always' } ],
    'comma-dangle': [ 'error', 'never' ],
    'comma-spacing': 'error',
    'comma-style': [ 'error', 'last' ],
    'complexity': [ 'error', 25 ],
    'consistent-return': 'error',
    'constructor-super': 'error',
    'default-case': 'error',
    'dot-location': [ 'error', 'object' ],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': [ 'error', 'always' ],
    'handle-callback-err': 'error',
    'indent': [ 'error', 2, { 'SwitchCase': 1 } ],
    'key-spacing': [ 'error', {
      'beforeColon': false,
      'afterColon': true
    } ],
    'keyword-spacing': 'error',
    'max-params': [ 'error', 4 ],
    'new-cap': 'error',
    'newline-per-chained-call': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-cond-assign': [ 'error', 'except-parens' ],
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-else-return': 'error',
    'no-empty': [ 'error', { 'allowEmptyCatch': true } ],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-mixed-requires': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [ 'error', { 'max': 1 } ],
    'no-native-reassign': [ 'error', { 'exceptions': [ 'Object' ] } ],
    'no-negated-in-lhs': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-return-assign': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': [ 'error', { 'allow': [ 'body', 'error', 'reject', 'resolve', 'response', 'result' ] } ],
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': [ 'error', 'nofunc' ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': [ 'error', {
      'terms': [ 'todo', 'fixme', 'hack' ],
      'location': 'anywhere'
    } ],
    'no-with': 'error',
    'object-curly-newline': [ 'error', { 'minProperties': 2 } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': 'error',
    'object-shorthand': 'error',
    'one-var': [ 'error', 'never' ],
    'one-var-declaration-per-line': 'error',
    'padded-blocks': [ 'error', 'never' ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quotes': [ 'error', 'single', { 'avoidEscape': true } ],
    'radix': [ 'error', 'always' ],
    'require-yield': 'error',
    'semi': 'error',
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'strict': 'error',
    'template-curly-spacing': [ 'error', 'always' ],
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'yield-star-spacing': [ 'error', 'before' ],
    'yoda': 'error',
    // Development rules
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: { parser: 'babel-eslint' }
}

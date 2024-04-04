module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
    // "worker": true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['babel', 'react'],
  extends: 'airbnb',
  rules: {
    'no-underscore-dangle': 'off',
    'arrow-parens': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/no-unused-state': 1,
    'no-use-before-define': 1,
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref']
      }
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'no-console': 'error',
    'no-control-regex': 'off',
    'no-debugger': 'error',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-trailing-spaces': 'off',
    'no-unused-vars': 'warn',
    'object-curly-newline': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-no-bind': 'off',
    // [
    //   "error",
    //   {
    //     "ignoreRefs": true,
    //     "allowArrowFunctions": true,
    //     "allowBind": true
    //   }
    // ],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prefer-stateless-function': [
      'off',
      {
        ignorePureComponents: true
      }
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    indent: [
      'warn',
      2,
      {
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    'template-curly-spacing': 'off'
  },
  globals: {
    Choerodon: true
  }
}

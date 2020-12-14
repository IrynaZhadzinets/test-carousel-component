module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  rules: {
    indent: [2, 2, { SwitchCase: 2, VariableDeclarator: 2 }],
    'no-tabs': 0,
    'react/prop-types': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'jsx-a11y/label-has-for': [2, {
      required: {
        every: ['nesting', 'id'],
      },
      allowChildren: true,
    }],
    'react/no-array-index-key': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
};

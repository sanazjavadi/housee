/* eslint-disable prettier/prettier */
/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container (connected component)',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Home',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  // eslint-disable-next-line no-unused-vars
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../../src/containers/{{properCase name}}/index.tsx',
        templateFile: './container/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/containers/{{properCase name}}/store/actions.ts',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/containers/{{properCase name}}/store/constants.ts',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/containers/{{properCase name}}/store/reducer.ts',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/containers/{{properCase name}}/store/saga.ts',
        templateFile: './container/saga.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/containers/{{properCase name}}/store/selectors.ts',
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/containers/{{properCase name}}/styles/{{properCase name}}.module.scss',
        templateFile: './container/style.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/containers/{{properCase name}}/tests/index.test.ts',
        templateFile: './container/index.test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/containers/{{properCase name}}/{{properCase name}}.d.ts',
        templateFile: './container/type.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
/* eslint-disable prettier/prettier */
/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
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
        path: '../../../src/components/{{properCase name}}/index.tsx',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/components/{{properCase name}}/tests/index.test.tsx',
        templateFile: './component/index.test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: './component/stories.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../src/components/{{properCase name}}/{{properCase name}}.d.ts',
        templateFile: './component/types.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
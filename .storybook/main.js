const webpack = require('webpack');

module.exports = {
  webpackFinal: async (baseConfig) => {
    baseConfig.module.rules.push({
      test: /\.po/,
      use: [
        {
          loader: '@lingui/loader',
        },
      ],
    });

    return baseConfig;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ]
}
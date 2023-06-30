/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  staticDirs: ['../src/assets'],
  stories: ["../src/**/*.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  
};
export default config;

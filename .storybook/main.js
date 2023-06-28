

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
    'storybook-addon-mock/register',
    'storybook-color-picker',
    '@storybook/addon-outline',
    '@storybook/addon-viewport',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true, // see below for alternatives
    defaultName: 'Docs', // set to change the name of generated docs entries
  },
};
export default config;

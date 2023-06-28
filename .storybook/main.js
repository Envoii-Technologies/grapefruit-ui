
const { mergeConfig } = require('vite');

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-styling',
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
    '@storybook/addon-outline',
    '@storybook/addon-viewport',
    '@storybook/addon-coverage',
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      server:
      {
        fs: 
        {
          strict: false,
        },
      },
      build: {
        chunkSizeWarningLimit: 4096,
        rollupOptions: {
          onwarn: ({ message }) => {
            if (/Use of eval in/.test(message)) {
              return;
            }
            console.log(message);
          },
        },
      },
    });
  },
};
export default config;

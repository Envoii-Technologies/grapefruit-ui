

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
    '@storybook/addon-outline',
    '@storybook/addon-viewport',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
    },
  },
  docs: {
    autodocs: true, // see below for alternatives
    defaultName: 'Docs', // set to change the name of generated docs entries
  },
  features: {
    interactionsDebugger: true,
  },
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules[5].oneOf.push({
  //     test: /\.scss$/i,
  //     use: [
  //       'style-loader',
  //       'css-loader',
  //       {
  //         loader: 'sass-loader',
  //         options: {
  //           api: 'modern',
  //           sassOptions: {
  //             outputStyle: 'expanded',
  //           },
  //         },
  //       },
  //     ],
  //     include: path.resolve(__dirname, '../'),
  //   });

  //   
  // },
};

export default config;

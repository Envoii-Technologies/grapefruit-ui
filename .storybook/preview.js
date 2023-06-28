import logo from './../src/assets/logo.png';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    brandTitle: `<img src="/src/assets/logo.png" width="10px" height="10px"/>`,
    layout: 'centered',
    viewMode: 'docs',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

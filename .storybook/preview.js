/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
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

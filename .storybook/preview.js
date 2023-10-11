/** @type { import('@storybook/react').Preview } */

import '../src/global-styles/index.scss';

const preview = {
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/6526958e9e148922c330d7f3",
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

import type { Preview } from '@storybook/react';

import { withThemeByClassName } from '@storybook/addon-styling';

import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: '#fff',
        dark: '#000',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;

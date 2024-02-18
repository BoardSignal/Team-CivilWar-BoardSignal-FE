import React from 'react';

import type { Preview } from '@storybook/react';
import { initialize as initializeMSW, mswLoader } from 'msw-storybook-addon';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';

import { ReactQueryClientProvider } from '../src/ReactQueryClientProvider';
import '../src/index.css';

initializeMSW();

const preview: Preview = {
  decorators: [
    withRouter,
    Story => (
      <ReactQueryClientProvider>
        <Story />
      </ReactQueryClientProvider>
    ),
  ],
  loaders: [mswLoader],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactRouter: reactRouterParameters({
      routing: {
        useStoryElement: true,
        path: '*',
      },
    }),
  },
};

export default preview;

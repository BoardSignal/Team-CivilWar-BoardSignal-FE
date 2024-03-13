import React from 'react';

import type { Preview } from '@storybook/react';
import { initialize as initializeMSW, mswLoader } from 'msw-storybook-addon';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';

import { ReactQueryClientProvider } from '../src/ReactQueryClientProvider';
import '../src/index.css';
import { ignoreDevResources } from '../src/mocks';

initializeMSW({
  onUnhandledRequest: ignoreDevResources,
});

const preview: Preview = {
  decorators: [
    withRouter,
    Story => (
      <ReactQueryClientProvider>
        <div
          id='styleRoot'
          className='flex w-full min-w-[350px] max-w-[450px] items-center justify-center'
        >
          <div className='w-full grow p-8'>
            <Story />
          </div>
        </div>
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
  globalTypes: {
    darkMode: {
      defaultValue: true, // Enable dark mode by default on all stories
    },
    className: {
      defaultValue: 'dark', // Set your custom dark mode class name
    },
  },
};

export default preview;

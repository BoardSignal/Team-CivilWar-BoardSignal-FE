import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import profilesMocks from '@/mocks/profiles';
import MyProfilePage from '@/pages/Profile';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof MyProfilePage> = {
  title: 'pages/Profile/page',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  component: MyProfilePage,
  parameters: {
    msw: {
      handlers: [...profilesMocks],
    },
    reactRouter: reactRouterParameters({
      routing: {
        path: '/users/:userId',
      },
      location: {
        pathParams: {
          userId: 1,
        },
      },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof MyProfilePage>;

export const DefaultTemplate: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import authMocks from '@/mocks/auth';
import gatheringDetailMocks from '@/mocks/gatheringDetail';
import GatheringUnfixPage from '@/pages/GatheringUnfix';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof GatheringUnfixPage> = {
  title: 'pages/GatheringUnfixPage',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...authMocks, ...gatheringDetailMocks],
    },
    reactRouter: reactRouterParameters({
      routing: {
        path: '/gatherings/unfix/:gatheringId',
      },
      location: {
        pathParams: {
          gatheringId: 1,
        },
      },
    }),
  },
  component: GatheringUnfixPage,
};

export default meta;

type Story = StoryObj<typeof GatheringUnfixPage>;

export const DefaultTemplate: Story = {};

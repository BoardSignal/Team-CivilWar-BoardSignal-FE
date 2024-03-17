import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';
import gatheringDetailMocks from '@/mocks/gatheringDetail';
import GatheringDetailPage from '@/pages/GatheringDetail';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof GatheringDetailPage> = {
  title: 'pages/GatheringDetail/page',
  tags: ['autodocs'],
  component: GatheringDetailPage,
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...gatheringDetailMocks],
    },
    reactRouter: reactRouterParameters({
      routing: {
        path: `${GATHERINGS_PAGE_URL}/:gatheringId`,
      },
      location: {
        pathParams: {
          gatheringId: 1,
        },
      },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof GatheringDetailPage>;

export const DefaultTemplate: Story = {};

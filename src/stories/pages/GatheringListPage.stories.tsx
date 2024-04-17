import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import gatheringListMocks from '@/mocks/gatheringList';
import GatheringListPage from '@/pages/GatheringList';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof GatheringListPage> = {
  title: 'pages/GatheringListPage',
  tags: ['autodocs'],
  component: GatheringListPage,
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...gatheringListMocks],
    },
    reactRouter: reactRouterParameters({
      routing: {
        useStoryElement: true,
        path: '/',
      },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof GatheringListPage>;

/**
 * Storybook에서 성별 필터는 동작하지 않습니다.
 */

export const DefaultTemplate: Story = {};

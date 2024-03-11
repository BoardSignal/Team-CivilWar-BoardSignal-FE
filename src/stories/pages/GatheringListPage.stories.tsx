import type { Meta, StoryObj } from '@storybook/react';

import gatheringListMocks from '@/mocks/gatheringList';
import GatheringListPage from '@/pages/GatheringList';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof GatheringListPage> = {
  title: 'pages/GatheringListPage',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...gatheringListMocks],
    },
  },
  component: GatheringListPage,
};

export default meta;

type Story = StoryObj<typeof GatheringListPage>;

export const DefaultTemplate: Story = {};

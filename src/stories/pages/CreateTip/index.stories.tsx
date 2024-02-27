import type { Meta, StoryObj } from '@storybook/react';

import CreateTipPage from '@/pages/CreateBoardGameTip';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof CreateTipPage> = {
  title: 'pages/CreateTipPage',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  component: CreateTipPage,
};

export default meta;

type Story = StoryObj<typeof CreateTipPage>;

export const DefaultTemplate: Story = {
  args: {
    boardGameTitle: '스플렌더',
  },
};

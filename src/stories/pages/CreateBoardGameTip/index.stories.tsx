import type { Meta, StoryObj } from '@storybook/react';

import CreateBoardGameTip from '@/pages/CreateBoardGameTip';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof CreateBoardGameTip> = {
  title: 'pages/CreateBoardGameTipPage',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  component: CreateBoardGameTip,
};

export default meta;

type Story = StoryObj<typeof CreateBoardGameTip>;

export const DefaultTemplate: Story = {};

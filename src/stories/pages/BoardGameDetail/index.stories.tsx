import type { Meta, StoryObj } from '@storybook/react';

import BoardGameDetailPage from '@/pages/BoardGameDetail';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof BoardGameDetailPage> = {
  title: 'pages/BoardGameDetail/page',
  tags: ['autodocs'],
  component: BoardGameDetailPage,
  decorators: [CommonPageLayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof BoardGameDetailPage>;

export const DefaultTemplate: Story = {};

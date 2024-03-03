import type { Meta, StoryObj } from '@storybook/react';

import BoardGameDetailPage from '@/pages/BoardGameDetail';

const meta: Meta<typeof BoardGameDetailPage> = {
  title: 'pages/BoardGameDetail/page',
  tags: ['autodocs'],
  component: BoardGameDetailPage,
};

export default meta;

type Story = StoryObj<typeof BoardGameDetailPage>;

export const DefaultTemplate: Story = {};

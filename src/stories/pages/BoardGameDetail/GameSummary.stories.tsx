import type { Meta, StoryObj } from '@storybook/react';

import GameSummary from '@/pages/BoardGameDetail/components/GameSummary';

const meta: Meta<typeof GameSummary> = {
  title: 'Pages/boardGameDetail/GameSummary',
  tags: ['autodocs'],
  component: GameSummary,
};

export default meta;

type Story = StoryObj<typeof GameSummary>;

export const Default: Story = {
  args: {
    name: '스플렌더',
    categories: ['전략', '카드'],
  },
};

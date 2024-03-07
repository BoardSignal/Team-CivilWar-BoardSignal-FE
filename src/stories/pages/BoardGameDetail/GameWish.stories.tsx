import type { Meta, StoryObj } from '@storybook/react';

import GameWish from '@/pages/BoardGameDetail/components/GameWish';

const meta: Meta<typeof GameWish> = {
  title: 'Pages/boardGameDetail/GameWish',
  tags: ['autodocs'],
  component: GameWish,
};

export default meta;

type Story = StoryObj<typeof GameWish>;

export const Default: Story = {
  args: {
    wishCount: 3,
    isWished: false,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import GamePlayDetail from '@/pages/BoardGameDetail/components/GamePlayDetail';

const meta: Meta<typeof GamePlayDetail> = {
  title: 'Pages/boardGameDetail/GamePlayDetail',
  tags: ['autodocs'],
  component: GamePlayDetail,
};

export default meta;

type Story = StoryObj<typeof GamePlayDetail>;

export const Default: Story = {
  args: {
    difficulty: '보통',
    minParticipants: 2,
    maxParticipants: 4,
    fromPlayTime: 30,
    toPlayTime: 60,
  },
};

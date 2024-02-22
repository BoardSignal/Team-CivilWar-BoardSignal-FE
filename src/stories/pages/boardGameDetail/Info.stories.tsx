import type { Meta, StoryObj } from '@storybook/react';

import Info from '@/pages/BoardGameDetail/components/Info';

const meta: Meta<typeof Info> = {
  title: 'Pages/boardGameDetail/Info',
  tags: ['autodocs'],
  component: Info,
};

export default meta;

type Story = StoryObj<typeof Info>;

export const Default: Story = {
  args: {
    name: '스플렌더',
    imageUrl: 'https://picsum.photos/400/200',
    wishCount: 15,
    minParticipants: 2,
    maxParticipants: 4,
    fromPlayTime: 30,
    toPlayTime: 60,
    difficulty: '보통',
    categories: ['전략', '카드'],
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import GatheringIntroduce from '@/pages/GatheringDetail/GatheringIntroduce/index';

const meta: Meta<typeof GatheringIntroduce> = {
  title: 'Pages/GatheringDetail/GatheringIntroduce',
  tags: ['autodocs'],
  component: GatheringIntroduce,
};

export default meta;

type Story = StoryObj<typeof GatheringIntroduce>;

export const Default: Story = {
  args: {
    imageUrl: 'https://picsum.photos/200/200',
  },
};

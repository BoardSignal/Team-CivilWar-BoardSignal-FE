import type { Meta, StoryObj } from '@storybook/react';

import GatheringDescription from '@/pages/GatheringDetail/GatheringIntroduce/components/GatheringDescription/index';

const meta: Meta<typeof GatheringDescription> = {
  title: 'Pages/GatheringDetail/GatheringDescription',
  tags: ['autodocs'],
  component: GatheringDescription,
};

export default meta;

type Story = StoryObj<typeof GatheringDescription>;

export const Default: Story = {
  args: {
    title: '정령섬 심화 격주로 하실 1~2분',
    description:
      '두 명이서 하고 있습니다. 3~4인이 더 재밌어요. 확장 텍스트가 영문이라 읽을 수 있으시면 편해요.',
  },
};

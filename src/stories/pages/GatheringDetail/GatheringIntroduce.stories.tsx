import type { Meta, StoryObj } from '@storybook/react';

import GatheringIntroduce from '@/pages/GatheringDetail/components/GatheringIntroduce/index';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof GatheringIntroduce> = {
  title: 'Pages/GatheringDetail/GatheringIntroduce',
  tags: ['autodocs'],
  component: GatheringIntroduce,
  decorators: [CommonPageLayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof GatheringIntroduce>;

export const Default: Story = {
  args: {
    gatheringIntroduce: {
      roomId: 1,
      title: '오후',
      description: '생성',
      place: null,
      subwayStation: '2호선',
      subwayLine: '2호선',
      time: '오후 2시',
      startTime: null,
      minAge: 20,
      maxAge: 30,
      minParticipants: 4,
      maxParticipants: 6,
      imageUrl: 'https://via.placeholder.com/300',
      allowedGender: '혼성',
      categories: [
        '워게임',
        '가족게임',
        '전략게임',
        '추상게임',
        '테마게임',
        '파티게임',
        '어린이게임',
        '컬렉터블게임',
      ],
      createdAt: '2024-03-15T15:58:27.934Z',
    },
  },
};

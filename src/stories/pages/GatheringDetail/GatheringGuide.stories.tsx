import type { Meta, StoryObj } from '@storybook/react';

import GatheringGuide from '@/pages/GatheringDetail/components/GatheringGuide/index';

const meta: Meta<typeof GatheringGuide> = {
  title: 'Pages/GatheringDetail/GatheringGuide',
  tags: ['autodocs'],
  component: GatheringGuide,
};

export default meta;

type Story = StoryObj<typeof GatheringGuide>;

export const Default: Story = {
  args: {
    gatheringGuide: {
      time: '토요일 오후',
      startTime: '',
      place: '사당역 근처 레드버튼',
      subwayStation: '사당역',
      minParticipants: 2,
      maxParticipants: 4,
      categories: ['전략게임', '워게임'],
      allowedGender: '남성',
      minAge: 21,
      maxAge: 28,
    },
  },
};

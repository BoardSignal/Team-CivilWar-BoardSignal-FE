import type { Meta, StoryObj } from '@storybook/react';

import GatheringGuide from '@/pages/GatheringDetail/GatheringIntroduce/components/GatheringGuide/index';

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
      startTime: '토요일 오후',
      place: '사당역 근처 레드버튼',
      minParticipants: 2,
      maxParticipants: 4,
      categories: ['전략게임', '워게임'],
      isAllowedAppositeGender: '혼성',
      minAge: 21,
      maxAge: 28,
    },
  },
};

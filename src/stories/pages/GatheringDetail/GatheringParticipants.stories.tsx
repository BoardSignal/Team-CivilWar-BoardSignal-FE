import type { Meta, StoryObj } from '@storybook/react';

import GatheringParticipants from '@/pages/GatheringDetail/GatheringParticipants';

const meta: Meta<typeof GatheringParticipants> = {
  title: 'Pages/GatheringDetail/GatheringParticipants',
  tags: ['autodocs'],
  component: GatheringParticipants,
};

export default meta;

type Story = StoryObj<typeof GatheringParticipants>;

const DUMMY_PARTICIPANTS = [
  {
    userId: 1,
    nickname: '인주니',
    ageGroup: '30대',
    isLeader: true,
    signalTemperature: 40,
  },
  {
    userId: 2,
    nickname: '조로김강훈',
    ageGroup: '20대',
    isLeader: false,
    signalTemperature: 90,
  },
];
export const Default: Story = {
  args: {
    participants: DUMMY_PARTICIPANTS,
  },
};

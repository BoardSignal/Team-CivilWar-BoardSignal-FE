import type { Meta, StoryObj } from '@storybook/react';

import UserProfile from '@/components/UserProfile';

const meta: Meta<typeof UserProfile> = {
  title: 'Components/UserProfile',
  tags: ['autodocs'],
  component: UserProfile,
};

export default meta;

type Story = StoryObj<typeof UserProfile>;

const DUMMY_USERPROFILE = {
  nickname: '크라켄마스터',
  profileImageUrl: 'https://picsum.photos/200/200',
  ageGroup: '20대',
  signalTemperature: 36.6,
  isLeader: true,
};

export const Default: Story = {
  args: {
    userProfile: DUMMY_USERPROFILE,
  },
};

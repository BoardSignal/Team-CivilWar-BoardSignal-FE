import type { Meta, StoryObj } from '@storybook/react';

import Profile from '@/pages/profile/components/Profile';

const meta: Meta<typeof Profile> = {
  title: 'Pages/Profile/Profile',
  tags: ['autodocs'],
  component: Profile,
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    nickname: '손호민',
    signal: 15,
    profileImageUrl: 'https://picsum.photos/200/200',
    ageGroup: '20대',
    gender: '남성',
  },
};

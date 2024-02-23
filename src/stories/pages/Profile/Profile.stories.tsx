import type { Meta, StoryObj } from '@storybook/react';

import PersonalInfo from '@/pages/Profile/components/PersonalInfo';

const meta: Meta<typeof PersonalInfo> = {
  title: 'Pages/Profile/PersonalInfo',
  tags: ['autodocs'],
  component: PersonalInfo,
};

export default meta;

type Story = StoryObj<typeof PersonalInfo>;

export const Default: Story = {
  args: {
    nickname: '손호민',
    signal: 15,
    profileImageUrl: 'https://picsum.photos/200/200',
    ageGroup: '20대',
    gender: '남성',
  },
};

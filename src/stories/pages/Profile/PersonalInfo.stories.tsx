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
    personalInfo: {
      nickname: 'evan',
      signal: 10,
      gender: '남성',
      ageGroup: '20대',
      profileImageUrl: null,
    },
  },
};

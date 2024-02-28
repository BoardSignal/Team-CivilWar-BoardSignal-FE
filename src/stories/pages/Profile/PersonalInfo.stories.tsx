import type { Meta, StoryObj } from '@storybook/react';

import PersonalInfo from '@/pages/Profile/components/PersonalInfo';

const meta: Meta<typeof PersonalInfo> = {
  title: 'Pages/MyProfile/PersonalInfo',
  tags: ['autodocs'],
  component: PersonalInfo,
};

export default meta;

type Story = StoryObj<typeof PersonalInfo>;

export const Default: Story = {};

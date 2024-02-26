import type { Meta, StoryObj } from '@storybook/react';

import UserProfile from '@/components/UserProfile/index';

const meta: Meta<typeof UserProfile> = {
  title: 'Components/UserProfile',
  tags: ['autodocs'],
  component: UserProfile,
};

export default meta;

type Story = StoryObj<typeof UserProfile>;

export const Default: Story = {
  args: { nickname: '크라켄마스터', ageGroup: '20대', value: 36.6 },
};

import type { Meta, StoryObj } from '@storybook/react';

import MyProfile from '@/pages/Profile';

const meta: Meta<typeof MyProfile> = {
  title: 'pages/MyProfile/page',
  tags: ['autodocs'],
  component: MyProfile,
};

export default meta;

type Story = StoryObj<typeof MyProfile>;

export const DefaultTemplate: Story = {};

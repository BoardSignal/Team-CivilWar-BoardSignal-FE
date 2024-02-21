import type { Meta, StoryObj } from '@storybook/react';

import LoginPage from '@/pages/Login';

const meta: Meta<typeof LoginPage> = {
  title: 'pages/LoginPage',
  tags: ['autodocs'],
  component: LoginPage,
};

export default meta;

type Story = StoryObj<typeof LoginPage>;

export const DefaultTemplate: Story = {};

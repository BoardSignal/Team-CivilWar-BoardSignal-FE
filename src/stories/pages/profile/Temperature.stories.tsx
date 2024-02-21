import type { Meta, StoryObj } from '@storybook/react';

import Temperature from '@/pages/profile/components/Temperature';

const meta: Meta<typeof Temperature> = {
  title: 'Pages/Profile/Temperature',
  tags: ['autodocs'],
  component: Temperature,
};

export default meta;

type Story = StoryObj<typeof Temperature>;

export const Default: Story = {};

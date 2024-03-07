import type { Meta, StoryObj } from '@storybook/react';

import SignalTemperature from '@/pages/MyProfile/components/SignalTemperature';

const meta: Meta<typeof SignalTemperature> = {
  title: 'Pages/MyProfile/SignalTemperature',
  tags: ['autodocs'],
  component: SignalTemperature,
};

export default meta;

type Story = StoryObj<typeof SignalTemperature>;

export const Default: Story = {};
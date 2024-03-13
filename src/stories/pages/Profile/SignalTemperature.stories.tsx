import type { Meta, StoryObj } from '@storybook/react';

import SignalTemperature from '@/pages/Profile/components/SignalTemperature';

const meta: Meta<typeof SignalTemperature> = {
  title: 'Pages/Profile/SignalTemperature',
  tags: ['autodocs'],
  component: SignalTemperature,
};

export default meta;

type Story = StoryObj<typeof SignalTemperature>;

export const Default: Story = {
  args: {
    value: 36.5,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import Alert from '@/components/alert/index';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  tags: ['autodocs'],
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    text: '텍스트',
    backgroundColor: '',
    textColor: '',
  },
};

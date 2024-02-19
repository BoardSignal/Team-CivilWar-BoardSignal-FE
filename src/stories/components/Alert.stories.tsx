import type { Meta, StoryObj } from '@storybook/react';

import Alert from '@/components/alert/index';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  tags: ['autodocs'],
  component: Alert,
  argTypes: {
    variant: {
      options: ['primary', 'normal', 'danger'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'Text',
    variant: 'primary',
  },
};

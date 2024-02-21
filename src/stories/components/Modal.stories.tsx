import type { Meta, StoryObj } from '@storybook/react';

import Modal from '@/components/Modal/index';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  component: Modal,
  argTypes: {
    variant: {
      options: ['primary', 'cancel'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '안내',
    message: '환영합니다!',
    variant: 'primary',
    children: '확인',
  },
};

import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Modal from '@/components/Modal/index';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  component: Modal,
  decorators: [CommonPageLayoutDecorator],
  argTypes: {
    variant: {
      options: ['primary', 'danger'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default = (args: Story) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      {...args}
      title='안내'
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      children='모임이 취소되었어요'
      buttonChildren='확인'
    />
  );
};

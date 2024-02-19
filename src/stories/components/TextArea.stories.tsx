import type { Meta, StoryObj } from '@storybook/react';

import Textarea from '@/components/TextArea/index';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  tags: ['autodocs'],
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: '모임 제목',
    currentTextCount: 0,
  },
};

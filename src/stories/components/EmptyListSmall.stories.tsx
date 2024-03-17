import type { Meta, StoryObj } from '@storybook/react';

import EmptyListSmall from '@/components/EmptyListFullScreen/EmptyListSmall';

const meta: Meta<typeof EmptyListSmall> = {
  title: 'components/EmptyListSmall',
  tags: ['autodocs'],
  component: EmptyListSmall,
};

export default meta;

type Story = StoryObj<typeof EmptyListSmall>;

export const DefaultTemplate: Story = {
  args: {
    title: '제목이에요!',
    message: '메시지에요!',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import EmptyListFullScreen from '@/components/EmptyListFullScreen';

const meta: Meta<typeof EmptyListFullScreen> = {
  title: 'components/EmptyListFullScreen',
  tags: ['autodocs'],
  component: EmptyListFullScreen,
};

export default meta;

type Story = StoryObj<typeof EmptyListFullScreen>;

export const DefaultTemplate: Story = {
  args: {
    title: '제목이에요!',
    message: '메시지에요!',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import MannerReview from '@/pages/Profile/components/MannerReview';

const meta: Meta<typeof MannerReview> = {
  title: 'Pages/Profile/MannerReview',
  tags: ['autodocs'],
  component: MannerReview,
};

export default meta;

type Story = StoryObj<typeof MannerReview>;

export const Default: Story = {
  args: {
    reviews: [
      {
        content: '시간을 잘 지켜요',
        score: 12,
      },
      {
        content: '착해요',
        score: 9,
      },
      {
        content: '게임을 재밌게 해요',
        score: 4,
      },
    ],
  },
};

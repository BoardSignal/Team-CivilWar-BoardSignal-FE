import type { Meta, StoryObj } from '@storybook/react';

import MannerReview from '@/pages/profile/components/MannerReview';

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
        title: '시간을 잘 지켜요.',
        count: 12,
      },
      {
        title: '착해요.',
        count: 9,
      },
      {
        title: '게임을 재밌게 해요.',
        count: 4,
      },
    ],
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import Review from '@/pages/profile/components/Review';

const meta: Meta<typeof Review> = {
  title: 'Pages/Profile/Review',
  tags: ['autodocs'],
  component: Review,
};

export default meta;

type Story = StoryObj<typeof Review>;

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

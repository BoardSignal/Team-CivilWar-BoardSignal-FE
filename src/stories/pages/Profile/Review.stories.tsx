import type { Meta, StoryObj } from '@storybook/react';

import MannerReview from '@/pages/Profile/components/MannerReview';

const meta: Meta<typeof MannerReview> = {
  title: 'Pages/Profile/MannerReview',
  tags: ['autodocs'],
  component: MannerReview,
};

export default meta;

type Story = StoryObj<typeof MannerReview>;

export const Default: Story = {};

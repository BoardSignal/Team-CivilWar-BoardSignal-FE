import type { Meta, StoryObj } from '@storybook/react';

import MannerReview from '@/pages/MyProfile/components/MannerReview';

const meta: Meta<typeof MannerReview> = {
  title: 'Pages/MyProfile/MannerReview',
  tags: ['autodocs'],
  component: MannerReview,
};

export default meta;

type Story = StoryObj<typeof MannerReview>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';

import ImageUpload from '@/components/ImageUpload';

const meta: Meta<typeof ImageUpload> = {
  title: 'components/ImageUpload',
  tags: ['autodocs'],
  component: ImageUpload,
};

export default meta;

type Story = StoryObj<typeof ImageUpload>;

export const Default: Story = {};

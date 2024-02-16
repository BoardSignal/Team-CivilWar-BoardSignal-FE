import type { Meta, StoryObj } from '@storybook/react';

import { GNB } from '@/components/GNB';

const meta: Meta<typeof GNB> = {
  title: 'components/GNB',
  tags: ['autodocs'],
  component: GNB,
};

export default meta;

type Story = StoryObj<typeof GNB>;

export const DefaultTemplate: Story = {};

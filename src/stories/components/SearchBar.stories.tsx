import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from '@/components/SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'components/SearchBar',
  tags: ['autodocs'],
  component: SearchBar,
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const DefaultTemplate: Story = {};

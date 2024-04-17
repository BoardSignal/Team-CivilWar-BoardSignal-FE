import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from '@/components/SearchBar';
import { SEARCH_PLACEHOLDER_MESSAGE } from '@/constants/messages/placeholder';

const meta: Meta<typeof SearchBar> = {
  title: 'components/SearchBar',
  tags: ['autodocs'],
  component: SearchBar,
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const DefaultTemplate: Story = {
  args: {
    placeholder: SEARCH_PLACEHOLDER_MESSAGE,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '@/components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'components/Spinner',
  tags: ['autodocs'],
  component: Spinner,
  decorators: [
    Story => (
      <div className='flex h-full items-center justify-center'>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

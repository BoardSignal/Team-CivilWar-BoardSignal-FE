import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='max-w-[390px]'>
        <Story />
      </div>
    ),
  ],
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultTemplate: Story = {
  args: {
    children: '리뷰 제출하기',
    variant: 'primary',
  },
};

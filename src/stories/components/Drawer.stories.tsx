import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import Drawer from '@/components/Drawer';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof Drawer> = {
  title: 'components/Drawer',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='flex h-full items-center justify-center'>
        <Story />
      </div>
    ),
    CommonPageLayoutDecorator,
  ],
  component: Drawer,
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const DefaultTemplate: Story = {
  render: args => {
    return (
      <Drawer {...args}>
        <Drawer.Trigger>
          <button className='text-gray-accent1'>Open Drawer</button>
        </Drawer.Trigger>
        <Drawer.Title className='text-gray-accent1'>Draw Title</Drawer.Title>
        <Drawer.Content className='text-gray-accent1'>
          Draw Content
        </Drawer.Content>
        <Drawer.Closer>
          <Button variant='primary'>확인</Button>
        </Drawer.Closer>
      </Drawer>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import Drawer from '@/components/Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'components/Drawer',
  tags: ['autodocs'],
  component: Drawer,
  decorators: [
    Story => (
      <div className='relative h-screen w-full min-w-[350px] max-w-[450px] shrink-0 shadow-xl'>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const DefaultTemplate = (args: Story) => {
  return (
    <div className='flex h-full items-center justify-center'>
      <Drawer {...args}>
        <Drawer.Trigger>
          <button>Open Drawer</button>
        </Drawer.Trigger>
        <Drawer.Title>Draw Title</Drawer.Title>
        <Drawer.Content>Draw Content</Drawer.Content>
      </Drawer>
    </div>
  );
};

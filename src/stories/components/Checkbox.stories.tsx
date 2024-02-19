import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '@/components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const DefaultTemplate = (args: Story) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Checkbox
        {...args}
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
      >
        예
      </Checkbox>
    </div>
  );
};

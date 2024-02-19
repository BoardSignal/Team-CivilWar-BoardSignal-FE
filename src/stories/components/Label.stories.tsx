import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Label from '@/components/Label';

const meta: Meta<typeof Label> = {
  title: 'components/Label',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='max-w-[390px]'>
        <Story />
      </div>
    ),
  ],
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const DefaultTemplate = (args: Story) => {
  const [value, setValue] = useState('');

  const inputStyle = {
    active: `w-full rounded-lg border border-gray-accent7 p-4 
    text-gray-accent2 focus:outline-gray-accent2`,
    disabled: `w-full rounded-lg border border-gray-accent7 p-4 
    text-gray-accent2 focus:outline-gray-accent2 bg-gray-accent7`,
  };

  return (
    <Label
      isLimitedText={true}
      textValue={value}
      textLimited={500}
      labelText='호민'
      {...args}
    >
      <input
        placeholder={'손호민'}
        disabled={false}
        className={inputStyle.active}
        onChange={e => setValue(e.target.value)}
      />
    </Label>
  );
};

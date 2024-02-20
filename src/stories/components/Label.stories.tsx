import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Label from '@/components/Label';
import TextInput from '@/components/TextInput';

const meta: Meta<typeof Label> = {
  title: 'components/Label',
  tags: ['autodocs'],
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const DefaultTemplate = (args: Story) => {
  const [value, setValue] = useState('');

  return (
    <Label
      currentLength={value}
      title='성별'
      width='300px'
      maxLength={500}
      {...args}
    >
      <TextInput
        placeholder='남성'
        disabled={false}
        onChange={e => setValue(e.target.value)}
        variant={'active'}
      />
    </Label>
  );
};

import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Label from '@/components/Label';
import Textarea from '@/components/TextArea';
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
    <>
      <Label
        currentLength={value.length}
        title='성별'
        width='300px'
        maxLength={500}
        {...args}
      >
        <TextInput
          placeholder='남성'
          disabled={true}
          onChange={e => setValue(e.target.value)}
        />
      </Label>
      <Label
        currentLength={value.length}
        title='모임 설명'
        width='300px'
        maxLength={500}
        {...args}
      >
        <Textarea
          placeholder='모임 설명을 작성해주세요.'
          onChange={e => setValue(e.target.value)}
        />
      </Label>
    </>
  );
};

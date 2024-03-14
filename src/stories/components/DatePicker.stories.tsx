import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DatePicker from '@/components/DatePicker';
import Label from '@/components/Label';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof DatePicker> = {
  title: 'components/DatePicker',
  tags: ['autodocs'],
  component: DatePicker,
  decorators: [
    Story => (
      <div className='p-4'>
        <Story />
      </div>
    ),
    CommonPageLayoutDecorator,
  ],
  render: function ExampleForm() {
    const [value, setValue] = useState('');

    return (
      <Label title='모임 날짜' isRequired>
        <DatePicker value={value} onChange={setValue} />
      </Label>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const DefaultTemplate: Story = {};

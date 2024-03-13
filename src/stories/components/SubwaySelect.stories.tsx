import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Label from '@/components/Label';
import SubwaySelect from '@/components/SubwaySelect';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof SubwaySelect> = {
  title: 'components/SubwaySelect',
  tags: ['autodocs'],
  component: SubwaySelect,
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
      <Label title='지하철역' isRequired>
        <SubwaySelect value={value} onChange={setValue} />
      </Label>
    );
  },
};

export default meta;

type Story = StoryObj<typeof SubwaySelect>;

export const DefaultTemplate: Story = {};

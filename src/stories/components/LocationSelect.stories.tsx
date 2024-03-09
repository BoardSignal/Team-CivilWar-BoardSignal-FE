import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Label from '@/components/Label';
import LocationSelect from '@/components/LocationSelect';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof LocationSelect> = {
  title: 'components/LocationSelect',
  tags: ['autodocs'],
  component: LocationSelect,
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
      <Label title='모임 장소' isRequired>
        <LocationSelect value={value} onChange={setValue} />
      </Label>
    );
  },
};

export default meta;

type Story = StoryObj<typeof LocationSelect>;

export const DefaultTemplate: Story = {};

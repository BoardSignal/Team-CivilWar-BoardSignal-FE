import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Range from '@/components/Range';

const meta: Meta<typeof Range> = {
  title: 'components/Range',
  tags: ['autodocs'],
  component: Range,
};

export default meta;

type Story = StoryObj<typeof Range>;

export const Headcount = (args: Story) => {
  const [headcountValues, setHeadcountValues] = useState([3, 5]);

  return (
    <Range
      {...args}
      min={1}
      max={8}
      step={1}
      value={headcountValues}
      onChange={(values: number[]) => setHeadcountValues([...values])}
    />
  );
};

export const Age = (args: Story) => {
  const [ageValues, setAgeValues] = useState<number[]>([20, 30]);

  return (
    <Range
      {...args}
      min={10}
      max={40}
      step={5}
      value={ageValues}
      includedValue={26}
      onChange={(values: number[]) => setAgeValues(values)}
    />
  );
};

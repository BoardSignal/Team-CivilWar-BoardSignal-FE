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
  const [headcountValues, setHeadcountValues] = useState<number[]>([3, 5]);

  return (
    <Range
      {...args}
      min={1}
      max={8}
      step={1}
      defaultValue={headcountValues}
      onChange={(value: number[]) => setHeadcountValues(value)}
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
      defaultValue={ageValues}
      includedValue={26}
      onChange={(values: number[]) => setAgeValues(values)}
    />
  );
};

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
  const [headcountValue, setHeadcountValue] = useState<number[]>([3, 5]);

  return (
    <Range
      {...args}
      min={1}
      max={8}
      step={1}
      defaultValue={headcountValue}
      onChange={(value: number[]) => setHeadcountValue(value)}
    />
  );
};

export const Age = (args: Story) => {
  const [ageValue, setAgeValue] = useState<number[]>([20, 30]);

  return (
    <Range
      {...args}
      min={10}
      max={40}
      step={5}
      defaultValue={ageValue}
      includedValue={26}
      onChange={(value: number[]) => setAgeValue(value)}
    />
  );
};

import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import ChipSelect from '@/components/ChipSelect';

const meta: Meta<typeof ChipSelect> = {
  title: 'components/ChipSelect',
  tags: ['autodocs'],
  component: ChipSelect,
};

export default meta;

type Story = StoryObj<typeof ChipSelect>;

export const Multiple: Story = {
  args: {
    limit: 7,
  },
  argTypes: {
    limit: { control: { type: 'range', min: 2, max: 7 } },
  },
  render: function Render(args) {
    const [selectedItems, setSelectedItems] = useState<string[]>([
      '전략',
      '추리',
    ]);
    const optionItems = [
      '전략',
      '심리',
      '추리',
      '마피아',
      '협상',
      '협력',
      '배팅/경매/레이스',
    ];

    return (
      <ChipSelect
        {...args}
        optionItems={optionItems}
        selectedItems={selectedItems}
        onChange={updatedItems => setSelectedItems([...updatedItems])}
      />
    );
  },
};

export const Single: Story = {
  render: function Render() {
    const [selectedItems, setSelectedItems] = useState<string[]>(['남성']);
    const optionItems = ['남성', '여성'];

    return (
      <ChipSelect
        optionItems={optionItems}
        selectedItems={selectedItems}
        limit={1}
        onChange={setSelectedItems}
      />
    );
  },
};

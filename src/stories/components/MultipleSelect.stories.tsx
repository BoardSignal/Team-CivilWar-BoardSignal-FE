import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import MultipleSelect from '@/components/MultipleSelect';

const meta: Meta<typeof MultipleSelect> = {
  title: 'components/MultipleSelect',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='max-w-[390px]'>
        <Story />
      </div>
    ),
  ],
  component: MultipleSelect,
};

export default meta;

type Story = StoryObj<typeof MultipleSelect>;

export const DefaultTemplate = (args: Story) => {
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

  const handleClickButton = (optionItem: string) => {
    if (selectedItems.includes(optionItem)) {
      setSelectedItems(
        selectedItems.filter(selectedItem => selectedItem !== optionItem),
      );

      return;
    }

    setSelectedItems([...selectedItems, optionItem]);
  };

  return (
    <MultipleSelect
      {...args}
      optionItems={optionItems}
      selectedItems={selectedItems}
      onClick={handleClickButton}
    />
  );
};

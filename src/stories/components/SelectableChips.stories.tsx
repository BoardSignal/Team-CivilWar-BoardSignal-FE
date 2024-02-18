import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SelectableChips from '@/components/SelectableChips';

const meta: Meta<typeof SelectableChips> = {
  title: 'components/SelectableChips',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='max-w-[390px]'>
        <Story />
      </div>
    ),
  ],
  component: SelectableChips,
};

export default meta;

type Story = StoryObj<typeof SelectableChips>;

export const DefaultTemplate = (args: Story) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    '전략',
    '추리',
  ]);
  const items = [
    '전략',
    '심리',
    '추리',
    '마피아',
    '협상',
    '협력',
    '배팅/경매/레이스',
  ];

  const handleClickChip = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(prevState =>
        prevState.filter(selectedItem => selectedItem !== item),
      );

      return;
    }

    setSelectedItems(prevState => [...prevState, item]);
  };

  return (
    <SelectableChips
      {...args}
      items={items}
      selectedItems={selectedItems}
      onClick={handleClickChip}
    />
  );
};

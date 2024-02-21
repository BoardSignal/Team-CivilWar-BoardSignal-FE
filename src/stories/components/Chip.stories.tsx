import type { Meta, StoryObj } from '@storybook/react';

import Chip from '@/components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  tags: ['autodocs'],
  component: Chip,
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const DefaultTemplate = (args: Story) => {
  const chips = [
    '배팅 / 전략',
    '카드경매',
    '심리',
    '블러핑',
    '마피아',
    '카드빙고',
  ];

  return (
    <div className='flex flex-wrap gap-2'>
      {chips.map(chipName => (
        <Chip key={chipName} {...args}>
          {chipName}
        </Chip>
      ))}
    </div>
  );
};

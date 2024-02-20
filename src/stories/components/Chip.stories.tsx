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
  const chipArray = [
    '배팅 / 전략',
    '카드경매',
    '심리',
    '블러핑',
    '마피아',
    '카드빙고',
  ];

  return (
    <div className='flex flex-wrap gap-2'>
      {chipArray.map((e, i) => (
        <Chip key={i} {...args}>
          {e}
        </Chip>
      ))}
    </div>
  );
};

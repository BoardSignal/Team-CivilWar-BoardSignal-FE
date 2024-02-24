import type { Meta, StoryObj } from '@storybook/react';

import OptionFilterBar from '@/components/OptionFilterBar';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof OptionFilterBar> = {
  title: 'components/OptionFilterBar',
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='h-full min-w-[350px] max-w-[450px]'>
        <Story />
      </div>
    ),
    CommonPageLayoutDecorator,
  ],
  component: OptionFilterBar,
};

export default meta;

const OPTIONS = [
  {
    name: '지역',
    icons: {
      fill: 'map-pin-fill',
      line: 'map-pin-line',
    },
    items: ['강남역', '합정역', '신당역'],
    queryKey: 'subway',
  },
  {
    name: '시간',
    icons: {
      fill: 'time-fill',
      line: 'time-line',
    },
    items: ['평일 오전', '평일 오후', '주말 오전', '주말 오후'],
    queryKey: 'time',
  },
  {
    name: '카테고리',
    icons: {
      fill: 'gamepad-fill',
      line: 'gamepad-line',
    },
    items: [
      '전략',
      '심리',
      '추리',
      '마피아',
      '협상',
      '협력',
      '베팅/경매/레이스',
    ],
    queryKey: 'category',
  },
  {
    name: '성별',
    icons: {
      fill: 'team-fill',
      line: 'team-line',
    },
    items: ['동성만'],
    queryKey: 'gender',
  },
];

type Story = StoryObj<typeof OptionFilterBar>;

export const DefaultTemplate: Story = {
  args: {
    options: OPTIONS,
  },
};

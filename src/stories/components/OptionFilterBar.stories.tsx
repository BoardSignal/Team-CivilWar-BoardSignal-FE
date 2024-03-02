import type { Meta, StoryObj } from '@storybook/react';

import OptionFilterBar from '@/components/OptionFilterBar';

import { CommonPageLayoutDecorator } from '../CommonPageLayoutDecorator';

const meta: Meta<typeof OptionFilterBar> = {
  title: 'components/OptionFilterBar',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  component: OptionFilterBar,
};

export default meta;

const OPTIONS = [
  {
    name: '지역',
    icon: 'map-pin',
    items: ['강남역', '합정역', '신당역'],
    queryStringKey: 'station',
  },
  {
    name: '시간',
    icon: 'time',
    items: ['평일 오전', '평일 오후', '주말 오전', '주말 오후'],
    queryStringKey: 'time',
  },
  {
    name: '카테고리',
    icon: 'gamepad',
    items: [
      '전략',
      '심리',
      '추리',
      '마피아',
      '협상',
      '협력',
      '베팅/경매/레이스',
    ],
    queryStringKey: 'category',
  },
  {
    name: '성별',
    icon: 'team',
    items: ['남성', '여성'],
    queryStringKey: 'gender',
  },
];

type Story = StoryObj<typeof OptionFilterBar>;

export const DefaultTemplate: Story = {
  args: {
    options: OPTIONS,
  },
};

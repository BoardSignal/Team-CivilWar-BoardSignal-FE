import type { Meta, StoryObj } from '@storybook/react';

import GatheringListItem from '@/components/GatheringListItem';

const meta: Meta<typeof GatheringListItem> = {
  title: 'components/GatheringListItem',
  tags: ['autodocs'],
  component: GatheringListItem,
};

export default meta;

type Story = StoryObj<typeof GatheringListItem>;

const DUMMY_GATHERING = {
  id: 1,
  imageUrl: '',
  title: '정령섬 심화 격주로 하실 1~2분',
  description:
    '두 명이서 하고 있습니다.\n 3~4인이 더 재밌어요.\n 확장 텍스트가 영문이라 읽을 수 있으시면 편해요.',
  station: '강남역',
  time: '주말 오후',
  minAge: 23,
  maxAge: 29,
  allowedGender: '혼성',
  minParticipants: 3,
  maxParticipants: 4,
  categories: ['전략'],
  headCount: 2,
  createdAt: String(new Date()),
};

export const DefaultTemplate: Story = {
  args: {
    gathering: DUMMY_GATHERING,
  },
};

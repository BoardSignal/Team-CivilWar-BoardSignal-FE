import type { Meta, StoryObj } from '@storybook/react';

import GatheringList from '@/components/GatheringList';

const meta: Meta<typeof GatheringList> = {
  title: 'components/GatheringList',
  tags: ['autodocs'],
  component: GatheringList,
};

export default meta;

type Story = StoryObj<typeof GatheringList>;

const DUMMY_GATHERINGS = [
  {
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
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/200',
    title: '아르낙 테플/룰마 하실분 아르낙 테플/룰마 하실분',
    description: '확장 텍스트가 영문이라 읽을 수 있으시면 편해요.',
    station: '사당역',
    time: '평일 오후',
    minAge: 25,
    maxAge: 35,
    allowedGender: '남성',
    minParticipants: 4,
    maxParticipants: 4,
    categories: ['전략', '심리'],
    headCount: 1,
    createdAt: '2024-03-02T11:01:32Z',
  },
  {
    id: 3,
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
    createdAt: '2024-03-02T05:01:32Z',
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/200',
    title: '아르낙 테플/룰마 하실분',
    description: '확장 텍스트가 영문이라 읽을 수 있으시면 편해요.',
    station: '사당역',
    time: '평일 오후',
    minAge: 25,
    maxAge: 35,
    allowedGender: '남성',
    minParticipants: 4,
    maxParticipants: 4,
    categories: ['전략', '심리'],
    headCount: 1,
    createdAt: '2024-02-28T05:01:32Z',
  },
  {
    id: 5,
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
    createdAt: '2024-02-10T05:01:32Z',
  },
  {
    id: 6,
    imageUrl: 'https://picsum.photos/200',
    title: '아르낙 테플/룰마 하실분',
    description: '확장 텍스트가 영문이라 읽을 수 있으시면 편해요.',
    station: '사당역',
    time: '평일 오후',
    minAge: 25,
    maxAge: 35,
    allowedGender: '남성',
    minParticipants: 4,
    maxParticipants: 4,
    categories: ['전략', '심리'],
    headCount: 1,
    createdAt: '2024-01-30T05:01:32Z',
  },
];

export const DefaultTemplate: Story = {
  args: {
    gatherings: DUMMY_GATHERINGS,
  },
};

export const Scroll: Story = {
  args: {
    gatherings: DUMMY_GATHERINGS,
  },
  render: args => {
    return (
      <div className='flex h-80 w-full flex-col'>
        <GatheringList {...args} />
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import ReviewCreate, {
  Gathering,
  ParticipantsInfos,
} from '@/pages/ReviewCreate';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof ReviewCreate> = {
  title: 'pages/ReviewCreate',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  component: ReviewCreate,
};

export default meta;

type Story = StoryObj<typeof ReviewCreate>;

const DUMMY_PARTICIPANTS_INFOS: ParticipantsInfos[] = [
  {
    userId: 1,
    nickname: 'User 1',
    ageGroup: '20대',
    isLeader: false,
    signalTemperature: 36.5,
    profileImageUrl: 'https://picsum.photos/200/200',
  },
  {
    userId: 2,
    nickname: 'User 2',
    ageGroup: '20대',
    isLeader: false,
    signalTemperature: 36.7,
    profileImageUrl: 'https://picsum.photos/200/200',
  },
  {
    userId: 3,
    nickname: 'User 3',
    ageGroup: '20대',
    isLeader: false,
    signalTemperature: 36.7,
    profileImageUrl: 'https://picsum.photos/200/200',
  },
  {
    userId: 4,
    nickname: 'User 4',
    ageGroup: '30s',
    isLeader: false,
    signalTemperature: 36.7,
    profileImageUrl: 'https://picsum.photos/200/200',
  },
  {
    userId: 5,
    nickname: 'User 5',
    ageGroup: '30s',
    isLeader: false,
    signalTemperature: 60.7,
    profileImageUrl: 'https://picsum.photos/200/200',
  },
];

const DUMMY_REVIEWCREATE: Gathering[] = [
  {
    id: 1,
    imageUrl: '',
    title: '정령섬 심화 격주로 하실 1~2분',
    description:
      '두 명이서 하고 있습니다.\n 3~4인이 더 재밌어요.\n 확장 텍스트가 영문이라 읽을 수 있으시면 편해요.',
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
];

export const Default: Story = {
  args: {
    gatherings: DUMMY_REVIEWCREATE,
    participantsInfos: DUMMY_PARTICIPANTS_INFOS,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { EndGameDetailsResponse, ParticipantInfo } from '@/apis/endGameUser';
import ReviewCreate from '@/pages/ReviewCreate';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof ReviewCreate> = {
  title: 'pages/ReviewCreate',
  tags: ['autodocs'],
  component: ReviewCreate,
  decorators: [CommonPageLayoutDecorator],
};
export default meta;

const DUMMY_PARTICIPANTS_INFOS: ParticipantInfo[] = [
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

const DUMMY_REVIEWCREATE: EndGameDetailsResponse[] = [
  {
    id: 2,
    title: '정령섬 심화 격주로 하실 1~2분',
    station: '강남역',
    meetingTime: '',
    imageUrl: null,
    minAge: 23,
    maxAge: 29,
    allowedGender: '혼성',
    minParticipants: 3,
    maxParticipants: 4,
    description: '',
    time: '',
    categories: ['전략'],
    headCount: 2,
    createdAt: String(new Date()),
    participantsInfos: [],
    peopleCount: 3,
    line: '',
    meetingPlace: '',
  },
];

type Story = StoryObj<typeof ReviewCreate>;

export const DefaultTemplate: Story = {
  args: {
    gathering: DUMMY_REVIEWCREATE,
    participantsInfos: DUMMY_PARTICIPANTS_INFOS,
  },
};

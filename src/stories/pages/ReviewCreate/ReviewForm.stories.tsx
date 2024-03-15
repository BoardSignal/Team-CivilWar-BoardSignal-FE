import type { Meta, StoryObj } from '@storybook/react';

import ReviewForm, {
  ParticipantsInfos,
} from '@/pages/ReviewCreate/components/ReviewForm';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof ReviewForm> = {
  title: 'pages/ReviewCreate/ReviewForm',
  tags: ['autodocs'],
  decorators: [CommonPageLayoutDecorator],
  component: ReviewForm,
};

export default meta;

const participantsInfos: ParticipantsInfos[] = [
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

type Story = StoryObj<typeof ReviewForm>;

export const DefaultTemplate: Story = {
  args: { participantsInfos },
};

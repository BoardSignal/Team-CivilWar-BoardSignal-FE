import type { Meta, StoryObj } from '@storybook/react';

import ReviewSelect from '@/pages/ReviewCreate/components/ReviewSelect';

const meta: Meta<typeof ReviewSelect> = {
  title: 'Pages/ReviewCreate/ReviewSelect',
  tags: ['autodocs'],
  component: ReviewSelect,
};

export default meta;

type Story = StoryObj<typeof ReviewSelect>;

interface ReviewProps {
  reviewScore: string;
  content: string;
  onChange: (score: string) => void;
}

const DUMMY_REVIEWSELECT: ReviewProps[] = [
  {
    content: '시간을 잘 지켜요',
    reviewScore: '좋아요',
    onChange: () => {},
  },
  {
    content: '친절하고 매너가 좋아요',
    reviewScore: '싫어요',
    onChange: () => {},
  },
  {
    content: '응답이 빨라요',
    reviewScore: '선택 안 함',
    onChange: () => {},
  },
];

// 스토리 정의
export const Default: Story = { args: { reviews: DUMMY_REVIEWSELECT } };

import type { Meta, StoryObj } from '@storybook/react';

import BoardGameTips from '@/pages/BoardGameDetail/components/BoardGameTips';

const meta: Meta<typeof BoardGameTips> = {
  title: 'Pages/BoardGameDetail/BoardGameTips',
  tags: ['autodocs'],
  component: BoardGameTips,
};

export default meta;

type Story = StoryObj<typeof BoardGameTips>;

export const Default: Story = {
  args: {
    tips: [
      {
        tipId: 1,
        nickname: 'injuniing',
        profileImageUrl: '',
        createdAt: '2024-01-31 14:30',
        content: '개꿀팁 갑니다',
        likeCount: 10,
        isLiked: false,
      },
      {
        tipId: 2,
        nickname: 'injuniing',
        profileImageUrl: '',
        createdAt: '2024-02-23 10:30',
        content: `
        개꿀팁 갑니다zㅋㅋㅋㅋ 
        개꿀팁 갑니다 개꿀팁 갑니다 
        개꿀팁 갑니다 ㅋㅋㅋ 
        개꿀팁 갑니다 
        개꿀팁 갑니다`,
        likeCount: 5,
        isLiked: false,
      },
      {
        tipId: 2,
        nickname: 'Hober',
        profileImageUrl: '',
        createdAt: '2023-02-23 10:30',
        content: `
        적은 인원일 땐 귀족 카드 노리세요. 
        적은 인원일 땐 귀족 카드 노리세요. 
        적은 인원일 땐 귀족 카드 노리세요. 
        적은 인원일 땐 귀족 카드 노리세요. 
        적은 인원일 땐 귀족 카드 노리세요. 
        적은 인원일 땐 귀족 카드 노리세요. 
        `,
        isLiked: true,
        likeCount: 8,
      },
    ],
    name: '테스트게임',
    boardGameId: '1',
    myTip: null,
  },
};

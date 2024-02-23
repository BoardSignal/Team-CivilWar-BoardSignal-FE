import type { Meta, StoryObj } from '@storybook/react';

import Tips from '@/pages/BoardGameDetail/components/Tips';

const meta: Meta<typeof Tips> = {
  title: 'Pages/BoardGameDetail/Tips',
  tags: ['autodocs'],
  component: Tips,
};

export default meta;

type Story = StoryObj<typeof Tips>;

export const Default: Story = {
  args: {
    tips: [
      {
        tipId: 1,
        nickname: 'injuniing',
        profileImageUrl: '',
        createdAt: '2024-01-31 14:30',
        content: '개꿀팁 갑니다',
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
      },
    ],
  },
};

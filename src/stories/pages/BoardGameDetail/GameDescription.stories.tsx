import type { Meta, StoryObj } from '@storybook/react';

import GameDescription from '@/pages/BoardGameDetail/components/GameDescription';

const meta: Meta<typeof GameDescription> = {
  title: 'Pages/boardGameDetail/GameDescription',
  tags: ['autodocs'],
  component: GameDescription,
};

export default meta;

type Story = StoryObj<typeof GameDescription>;

export const Default: Story = {
  args: {
    description:
      '스플렌더는 칩 수집 및 카드 개발 게임입니다. 플레이어는 르네상스 시대의 상인이 되어 보석 광산, 운송 수단, 상점 등을 구매하고 명성 포인트를 많이 획득해야 합니다. 충분히 부유하다면 귀족의 방문을 받을 수도 있으며, 이 경우 명성이 더욱 높아질 것입니다.',
  },
};

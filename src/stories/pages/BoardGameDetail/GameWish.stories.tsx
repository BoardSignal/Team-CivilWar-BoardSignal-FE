import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import GameWish from '@/pages/BoardGameDetail/components/GameWish';

const meta: Meta<typeof GameWish> = {
  title: 'Pages/boardGameDetail/GameWish',
  tags: ['autodocs'],
  component: GameWish,
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/board-games/:boardGameId',
      },
      location: {
        pathParams: {
          boardGameId: 1,
        },
      },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof GameWish>;

export const Default: Story = {
  args: {
    wishCount: 3,
    isWished: false,
  },
};

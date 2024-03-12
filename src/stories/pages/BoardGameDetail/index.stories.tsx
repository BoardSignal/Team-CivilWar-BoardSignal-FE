import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import boardGameDetailMocks from '@/mocks/boardGameDetail';
import BoardGameDetailPage from '@/pages/BoardGameDetail';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof BoardGameDetailPage> = {
  title: 'pages/BoardGameDetail/page',
  tags: ['autodocs'],
  component: BoardGameDetailPage,
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...boardGameDetailMocks],
    },
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

type Story = StoryObj<typeof BoardGameDetailPage>;

export const DefaultTemplate: Story = {};

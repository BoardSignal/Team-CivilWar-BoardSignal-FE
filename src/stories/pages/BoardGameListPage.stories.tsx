import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import { BOARD_GAMES_PAGE_URL } from '@/constants/pageRoutes';
import boardGameListMocks from '@/mocks/boardGameList';
import BoardGameListPage from '@/pages/BoardGameList';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof BoardGameListPage> = {
  title: 'pages/BoardGameListPage',
  tags: ['autodocs'],
  component: BoardGameListPage,
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...boardGameListMocks],
    },
    reactRouter: reactRouterParameters({
      routing: {
        useStoryElement: true,
        path: BOARD_GAMES_PAGE_URL,
      },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof BoardGameListPage>;

export const DefaultTemplate: Story = {};

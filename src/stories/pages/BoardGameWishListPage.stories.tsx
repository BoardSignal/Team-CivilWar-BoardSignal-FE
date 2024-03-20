import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import { USERS_WISH_PAGE_URL } from '@/constants/pageRoutes';
import authMocks from '@/mocks/auth';
import boardGameWishListMocks from '@/mocks/boardGameWishList';
import BoardGameWishListPage from '@/pages/BoardGameWishList';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof BoardGameWishListPage> = {
  title: 'pages/BoardGameWishListPage',
  tags: ['autodocs'],
  component: BoardGameWishListPage,
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...authMocks, ...boardGameWishListMocks],
    },
    reactRouter: reactRouterParameters({
      routing: {
        path: `${USERS_WISH_PAGE_URL}/:userId`,
      },
      location: {
        pathParams: {
          userId: 4,
        },
      },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof BoardGameWishListPage>;

export const DefaultTemplate: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import { CHATS_PAGE_URL } from '@/constants/pageRoutes';
import authMocks from '@/mocks/auth';
import chatRoomMessagesMocks from '@/mocks/chatRoom';
import gatheringDetailMocks from '@/mocks/gatheringDetail';
import ChatRoomPage from '@/pages/ChatRoom';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof ChatRoomPage> = {
  title: 'pages/ChatRoom/page',
  tags: ['autodocs'],
  component: ChatRoomPage,
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [
        ...gatheringDetailMocks,
        ...chatRoomMessagesMocks,
        ...authMocks,
      ],
    },
    reactRouter: reactRouterParameters({
      routing: {
        path: `${CHATS_PAGE_URL}/:gatheringId`,
      },
      location: {
        pathParams: {
          gatheringId: 1,
        },
      },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof ChatRoomPage>;

export const DefaultTemplate: Story = {};

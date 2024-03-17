import type { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, http } from 'msw';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import { NOTIFICATIONS_PAGE_URL } from '@/constants/pageRoutes';
import {
  MOCK_GET_NOTIFICATIONS_URL,
  mockGetNotificationsHandler,
} from '@/mocks/notifications';
import NotificationListPage from '@/pages/NotificationList';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof NotificationListPage> = {
  title: 'pages/NotificationListPage',
  // FIXME: Docs 한 페이지에 msw 핸들러가 로딩되면 가장 마지막의 handler만이 동작해요.
  // 한 페이지에 표시되기 때문에 당연한 일인 것 같기도 해요...
  // tags: ['autodocs'],
  component: NotificationListPage,
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        useStoryElement: true,
        path: NOTIFICATIONS_PAGE_URL,
      },
    }),
  },
};

export default meta;

type Story = StoryObj<typeof NotificationListPage>;

export const OnSuccess: Story = {
  name: '정상 목록 조회',
  parameters: {
    msw: {
      handlers: [
        http.get(MOCK_GET_NOTIFICATIONS_URL, mockGetNotificationsHandler),
      ],
    },
  },
};

export const OnEmpty: Story = {
  name: '빈 목록 조회',
  parameters: {
    msw: {
      handlers: [
        http.get(MOCK_GET_NOTIFICATIONS_URL, async () => {
          return HttpResponse.json({
            notificationsInfos: [],
            currentPage: 0,
            size: 20,
            hasNext: false,
          });
        }),
      ],
    },
  },
};

export const OnError: Story = {
  name: '오류 발생 조회',
  parameters: {
    msw: {
      handlers: [
        http.get(MOCK_GET_NOTIFICATIONS_URL, async () => {
          throw HttpResponse.json(undefined, {
            status: 500,
          });
        }),
      ],
    },
  },
};

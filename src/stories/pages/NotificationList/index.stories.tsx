import type { Meta, StoryObj } from '@storybook/react';
import { HttpResponse, http } from 'msw';

import notificationsMocks, {
  MOCK_GET_NOTIFICATIONS_URL,
  mockGetNotificationsHandler,
} from '@/mocks/notifications';
import NotificationListPage from '@/pages/NotificationList';
import { CommonPageLayoutDecorator } from '@/stories/CommonPageLayoutDecorator';

const meta: Meta<typeof NotificationListPage> = {
  title: 'pages/NotificationListPage',
  tags: ['autodocs'],
  component: NotificationListPage,
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [...notificationsMocks],
    },
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

let hasErrorHappened = false;

export const OnError: Story = {
  name: '오류 발생 후 정상 조회',
  parameters: {
    msw: {
      handlers: [
        http.get(MOCK_GET_NOTIFICATIONS_URL, async () => {
          if (!hasErrorHappened) {
            hasErrorHappened = true;
            throw HttpResponse.json(undefined, {
              status: 500,
            });
          }

          return mockGetNotificationsHandler();
        }),
      ],
    },
  },
};

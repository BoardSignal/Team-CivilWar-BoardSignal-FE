import { HttpResponse, http } from 'msw';

import API_BASE_URL from '@/apis/core/constants';
import { GET_NOTIFICATION_URL } from '@/apis/notifications';

const repeatArray = <T,>(count: number, arr: T[]) =>
  Array.from({ length: count })
    .map(() => arr)
    .flat();

export const MOCK_GET_NOTIFICATIONS_URL = `${API_BASE_URL}${GET_NOTIFICATION_URL}`;

export const mockGetNotificationsHandler = async () => {
  return HttpResponse.json(
    repeatArray(20, [
      {
        id: 1,
        type: '리뷰 도착',
        createdAt: '10분 전',
        link: '/me',
        message: '누군가 회원님에 대한 리뷰를 남겨주셨어요.',
      },
    ]),
  );
};

const notificationsMocks = [
  http.get(MOCK_GET_NOTIFICATIONS_URL, mockGetNotificationsHandler),
];

export default notificationsMocks;

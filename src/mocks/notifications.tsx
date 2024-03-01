import { HttpResponse, http } from 'msw';

import { GET_NOTIFICATION_URL } from '@/apis/notifications';

const repeatArray = <T,>(count: number, arr: T[]) =>
  Array.from({ length: count })
    .map(() => arr)
    .flat();

const MOCK_BASE_URL = import.meta.env.VITE_BASE_URL;
const GET_NOTIFICATIONS_URL = `${MOCK_BASE_URL}${GET_NOTIFICATION_URL}`;

const notificationsMocks = [
  http.get(GET_NOTIFICATIONS_URL, async () => {
    // 오류 페이지 테스트 용도에요
    if (Math.random() < 0.5) {
      throw HttpResponse.json(undefined, {
        status: 500,
      });
    }

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
  }),
];

export default notificationsMocks;

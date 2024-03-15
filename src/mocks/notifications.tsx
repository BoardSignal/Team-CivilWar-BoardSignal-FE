import { HttpResponse, http } from 'msw';

import { API_BASE_URL, NOTIFICATIONS_MY_API_URL } from '@/constants/apiRoutes';

export const MOCK_GET_NOTIFICATIONS_URL = `${API_BASE_URL}${NOTIFICATIONS_MY_API_URL}`;

const item = {
  title: '강퇴',
  body: '요 방에서 강퇴되었습니다',
  imageUrl:
    'https://mblogthumb-phinf.pstatic.net/MjAxOTExMjhfMzIg/MDAxNTc0OTEyOTA1NjIz.mMoeo_UbgivwXsQudMEObVuIwAG1_O1PS9QAA5zzL20g.xJm8yiuwCCsUjItvTOkFThSEpZlV67o6xr3UYVvkYl4g.PNG.rlarbtjq7913/%EC%9E%90%EB%B0%94_%EC%98%A4%EB%9D%BC%ED%81%B4.png?type=w800',
  roomId: null,
  createdAt: '2024-03-14T13:56:00+09:00',
};

/**
 * 페이지네이션을 흉내내기 위한 임시 상태에요.
 */
let pageNumber = 0;

export const mockGetNotificationsHandler = async () => {
  pageNumber += 1;

  return HttpResponse.json({
    notificationsInfos: Array.from({ length: 20 }).map((_, i) => ({
      notificationId: pageNumber * 20 + i,
      ...item,
    })),
    currentPage: pageNumber,
    size: 20,
    hasNext: pageNumber < 5,
  });
};

const notificationsMocks = [
  http.get(MOCK_GET_NOTIFICATIONS_URL, mockGetNotificationsHandler),
];

export default notificationsMocks;

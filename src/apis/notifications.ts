import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { NOTIFICATIONS_MY_API_URL } from '@/constants/apiRoutes';
import {
  END_GAMES_REVIEWS_CREATE_PAGE_URL,
  GATHERINGS_PAGE_URL,
  USERS_ME_PAGE_URL,
} from '@/constants/pageRoutes';
import { NOTIFICATIONS_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export type NotificationType =
  | '지역매칭'
  | '강퇴'
  | '매칭 확정'
  | '삭제'
  | '리뷰';

export interface NotificationItemResponse {
  notificationId: number;
  title: NotificationType;
  body: string;
  imageUrl: string | null;
  roomId: number | null;
  createdAt: string;
}

interface NotificationResponse {
  notificationsInfos: NotificationItemResponse[];
  currentPage: number;
  size: number;
  hasNext: boolean;
}

const getNotifications = (size: number, page: number) =>
  api.get<NotificationResponse>({
    url: NOTIFICATIONS_MY_API_URL,
    params: { size, page },
  });

/**
 * API로 전달되는 type 값을 디자인 상의 문구로 매핑해요.
 */
const notificationTitleMap = {
  지역매칭: '신규 모임',
  강퇴: '모임 추방',
  '매칭 확정': '모임 확정',
  삭제: '모임 취소',
};

/**
 * API로 전달되는 type 값으로 디자인 상의 문구를 구해서 반환해요.
 *
 * 리뷰인 경우 roomId 여부로 요청인지 도착인지 알 수 있어요.
 */
const getTextOfType = (type: NotificationType, roomId: number | null) => {
  return type === '리뷰'
    ? roomId
      ? '리뷰 요청'
      : '리뷰 도착'
    : notificationTitleMap[type];
};

/*
  TODO: 각 Case 별 Test Case 만들기

  '리뷰 도착' => 본인 프로필 페이지로 이동
  '리뷰 요청' => 해당 모임 리뷰 작성 페이지로 이동
  ---
  '신규 모임' => 해당 모임 상세 페이지로 이동
  '모임 확정' => 해당 모임 상세 페이지로 이동
  '모임 추방' => 무응답
  '모임 취소' => 무응답
*/
const getUrlForType = (type: string, roomId: number | null) => {
  switch (true) {
    case type === '리뷰 도착':
      return USERS_ME_PAGE_URL;
    case type === '리뷰 요청':
      return `${END_GAMES_REVIEWS_CREATE_PAGE_URL}/${roomId}`;
    case !!roomId:
      return `${GATHERINGS_PAGE_URL}/${roomId}`;
    default:
      return '';
  }
};

/**
 * NofiticationListItemResponse를 ListItemProp에 맞게 매핑해요.
 */
const notificationMapper = ({
  title,
  body,
  roomId,
  ...props
}: NotificationItemResponse) => {
  const type = getTextOfType(title, roomId);

  return {
    ...props,
    type,
    message: body,
    navigateUrl: getUrlForType(type, roomId),
  };
};

export const useGetNotificationsApi = (size: number = 20) => {
  const { data, hasNextPage, fetchNextPage, fetchStatus } =
    useSuspenseInfiniteQuery({
      queryKey: [NOTIFICATIONS_QUERY_KEY],
      queryFn: ({ pageParam }) => getNotifications(size, pageParam),
      initialPageParam: 0,
      getNextPageParam: ({ hasNext, currentPage }) =>
        hasNext ? currentPage + 1 : undefined,
    });

  const allPagesMerged = data.pages.flatMap(
    ({ notificationsInfos }) => notificationsInfos,
  );

  return {
    fetchStatus,
    hasNextPage,
    fetchNextPage,
    notificationsInfos: allPagesMerged.map(notificationMapper),
  };
};

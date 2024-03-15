import { useSuspenseQuery } from '@tanstack/react-query';

import { NOTIFICATIONS_MY_API_URL } from '@/constants/apiRoutes';
import { NOTIFICATIONS_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

export type NotificationType =
  | '지역매칭'
  | '강퇴'
  | '매칭 확정'
  | '방 삭제'
  | '리뷰';

export interface NotificationItemResponseDTO {
  notificationId: number;
  title: NotificationType;
  body: string;
  imageUrl: string | null;
  roomId: number | null;
  createdAt: string;
}

interface NotificationResponseDTO {
  notificationsInfos: NotificationItemResponseDTO[];
  currentPage: number;
  size: number;
  hasNext: boolean;
}

const getNotifications = () =>
  api.get<NotificationResponseDTO>({
    url: NOTIFICATIONS_MY_API_URL,
  });

/**
 * API로 전달되는 type 값을 디자인 상의 문구로 매핑해요.
 */
const notificationTitleMap = {
  지역매칭: '신규 모임',
  강퇴: '모임 추방',
  '매칭 확정': '모임 확정',
  '방 삭제': '모임 취소',
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

export const useGetNotificationsApi = () => {
  const { data } = useSuspenseQuery({
    queryFn: getNotifications,
    queryKey: [NOTIFICATIONS_QUERY_KEY],
  });

  // 기존 데이터에서 title
  return {
    ...data,
    notificationsInfos: data.notificationsInfos.map(
      ({ title, body, roomId, ...props }) => ({
        ...props,
        type: getTextOfType(title, roomId),
        message: body,
        roomId,
      }),
    ),
  };
};

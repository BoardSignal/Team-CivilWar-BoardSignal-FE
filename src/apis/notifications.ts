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

export interface Notification {
  notificationId: number;
  title: NotificationType;
  body: string;
  imageUrl: string | null;
  roomId: number | null;
  createdAt: string;
}

interface NotificationResponse {
  notificationsInfos: Notification[];
  currentPage: number;
  size: number;
  hasNext: boolean;
}

const getNotifications = () =>
  api.get<NotificationResponse>({
    url: NOTIFICATIONS_MY_API_URL,
  });

export const useGetNotificationsApi = () => {
  const { data } = useSuspenseQuery({
    queryFn: getNotifications,
    queryKey: [NOTIFICATIONS_QUERY_KEY],
  });

  return data;
};

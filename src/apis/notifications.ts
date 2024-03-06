import { useSuspenseQuery } from '@tanstack/react-query';

import { api } from './core';

export const GET_NOTIFICATION_URL = '/users/notifications/my';

// FIXME: 실제 API 응답에 맞게 변환이 필요해요. 현재는 단순 예시용이에요.
export interface Notification {
  id: number;
  type: string;
  message: string;
  createdAt: string;
  link?: string;
  thumbnailUrl?: string;
}

const getNotifications = () =>
  api.get<Notification[]>({
    url: GET_NOTIFICATION_URL,
  });

export const useGetNotificationsApi = () => {
  const { data } = useSuspenseQuery({
    queryFn: getNotifications,
    queryKey: ['notifications'],
    staleTime: 0,
    gcTime: 0,
  });

  return data;
};

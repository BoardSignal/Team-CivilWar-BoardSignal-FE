import { useSuspenseQuery } from '@tanstack/react-query';

import { NOTIFICATIONS_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

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
    url: NOTIFICATIONS_API_URL,
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

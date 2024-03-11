import {
  BOARD_GAMES_PAGE_URL,
  CHATS_PAGE_URL,
  NOTIFICATIONS_PAGE_URL,
  USERS_PAGE_URL,
} from '@/constants/pageRoutes';

export const GNBRoutes = [
  {
    name: '홈',
    path: '/',
    icon: 'home',
  },
  {
    name: '채팅',
    path: CHATS_PAGE_URL,
    icon: 'chat',
  },
  {
    name: '게임 정보',
    path: BOARD_GAMES_PAGE_URL,
    icon: 'gamepad',
  },
  {
    name: '알림',
    path: NOTIFICATIONS_PAGE_URL,
    icon: 'bell',
  },
  {
    name: '나의 정보',
    path: `${USERS_PAGE_URL}/me`,
    icon: 'user',
  },
] as const;

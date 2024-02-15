export const GNBRoutes = [
  {
    name: '홈',
    path: '/',
    icons: {
      fill: 'home-fill',
      line: 'home-line',
    },
  },
  {
    name: '채팅',
    path: '/chat',
    icons: {
      fill: 'chat-fill',
      line: 'chat-line',
    },
  },
  {
    name: '게임 정보',
    path: '/game-info',
    icons: {
      fill: 'gamepad-fill',
      line: 'gamepad-line',
    },
  },
  {
    name: '알림',
    path: '/notifications',
    icons: {
      fill: 'bell-fill',
      line: 'bell-line',
    },
  },
  {
    name: '나의 정보',
    path: '/me',
    icons: {
      fill: 'user-fill',
      line: 'user-line',
    },
  },
] as const;

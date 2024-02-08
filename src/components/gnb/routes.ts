import bellFill from '@/assets/icons/bell-fill.svg';
import bellLine from '@/assets/icons/bell-line.svg';
import chatFill from '@/assets/icons/chat-fill.svg';
import chatLine from '@/assets/icons/chat-line.svg';
import gamepadFill from '@/assets/icons/gamepad-fill.svg';
import gamepadLine from '@/assets/icons/gamepad-line.svg';
import homeFill from '@/assets/icons/home-fill.svg';
import homeLine from '@/assets/icons/home-line.svg';
import userFill from '@/assets/icons/user-fill.svg';
import userLine from '@/assets/icons/user-line.svg';

export const GNBRoutes = [
  {
    name: '홈',
    path: '/',
    icons: {
      fill: homeFill,
      line: homeLine,
    },
  },
  {
    name: '채팅',
    path: '/chat',
    icons: {
      fill: chatFill,
      line: chatLine,
    },
  },
  {
    name: '게임 정보',
    path: '/game-info',
    icons: {
      fill: gamepadFill,
      line: gamepadLine,
    },
  },
  {
    name: '알림',
    path: '/notifications',
    icons: {
      fill: bellFill,
      line: bellLine,
    },
  },
  {
    name: '나의 정보',
    path: '/me',
    icons: {
      fill: userFill,
      line: userLine,
    },
  },
] as const;

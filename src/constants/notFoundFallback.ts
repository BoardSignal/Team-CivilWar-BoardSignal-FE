import {
  BOARD_GAMES_PAGE_URL,
  CHATS_PAGE_URL,
  END_GAMES_PAGE_URL,
} from './pageRoutes';

/**
 * Not Found Error가 발생한 URL을 기준으로 이동할 URL을 반환해요.
 */
export const getNotFoundFallbackUrl = (pathname: string) => {
  if (pathname.startsWith(CHATS_PAGE_URL)) return CHATS_PAGE_URL;
  if (pathname.startsWith(BOARD_GAMES_PAGE_URL)) return BOARD_GAMES_PAGE_URL;
  if (pathname.startsWith(END_GAMES_PAGE_URL)) return END_GAMES_PAGE_URL;

  return '/';
};

/**
 * Not Found Error가 발생한 URL을 기준으로 버튼 텍스트에서 표시될 페이지 이름을 반환해요.
 *
 * 목록 페이지로 이동하는 경우 '목록'을, 그 외는 '홈'으로 표시해요.
 *
 * 전체 페이지 이름을 표시하기에는 면적이 좁아서 '목록'으로 단순히 표시해요.
 */
export const getNotFoundFallbackButtonText = (pathname: string) => {
  if (pathname.startsWith(CHATS_PAGE_URL)) return '목록';
  if (pathname.startsWith(BOARD_GAMES_PAGE_URL)) return '목록';
  if (pathname.startsWith(END_GAMES_PAGE_URL)) return '목록';

  return '홈';
};

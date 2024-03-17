export const API_BASE_URL =
  import.meta.env.VITE_BASE_URL || import.meta.env.STORYBOOK_BASE_URL;

export const AUTH_API_URL = '/auth';

export const AUTH_LOGIN_KAKAO_URL = '/kakao';

export const AUTH_LOGOUT_API_URL = '/auth/logout';
export const AUTH_REISSUE_API_URL = '/auth/reissue';

export const KAKAO = '/kakao';

export const USERS_API_URL = '/users';
export const USERS_END_GAME_API_URL = '/users/end-game';
export const USERS_MY_API_URL = '/users/my';
export const USERS_REVIEW_API_URL = '/users/review';

export const BOARD_GAMES_API_URL = '/board-games';
export const BOARD_GAMES_LIKE_API_URL = '/board-games/like';
export const BOARD_GAMES_TIP_API_URL = '/board-games/tip';
export const BOARD_GAMES_WISH_API_URL = '/board-games/wish';

export const ROOMS_API_URL = '/rooms';
export const ROOMS_FILTER_API_URL = '/rooms/filter';
export const ROOMS_FIX_API_URL = '/rooms/fix';
export const ROOMS_IN_API_URL = '/rooms/in';
export const ROOMS_KICK_API_URL = '/rooms/kick';
export const ROOMS_MY_END_GAMES_API_URL = '/rooms/my/end-games';
export const ROOMS_OUT_API_URL = '/rooms/out';
export const ROOMS_SEARCH_API_URL = '/rooms/search';
export const ROOMS_UNFIX_API_URL = '/rooms/unfix';
export const ROOMS_CHATS_API_URL = '/rooms/chats';
export const ROOMS_CHATS_MY_GAMES_API_URL = '/rooms/my/games';

export const NOTIFICATIONS_MY_API_URL = '/notifications/my';
export const FCM_TOKEN_API_URL = '/notifications/token';

export const REVIEWS_API_URL = '/reviews';

// WebSocket
export const CHAT_CONNECT_SOCKET_URL = '/ws/chats';
export const CHAT_SUBSCRIBE_SOCKET_URL = '/topic/chats';
export const CHAT_SEND_SOCKET_URL = '/app/chats';

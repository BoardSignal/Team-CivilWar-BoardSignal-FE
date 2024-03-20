import { HttpResponse, http } from 'msw';

import { API_BASE_URL, BOARD_GAMES_WISH_API_URL } from '@/constants/apiRoutes';

export const MOCK_GET_BOARD_GAME_WISH_LIST_URL = `${API_BASE_URL}${BOARD_GAMES_WISH_API_URL}/4`;

export const mockGetBoardGameWishListHandler = async () => {
  return HttpResponse.json({
    boardGamesInfos: [
      {
        boardGameId: 1,
        name: '스플렌더',
        categories: ['전략 게임'],
        difficulty: '어려움',
        minParticipants: 2,
        maxParticipants: 4,
        fromPlayTime: 45,
        toPlayTime: 45,
        wishCount: 54,
        imageUrl: 'https://picsum.photos/200',
      },
      {
        boardGameId: 2,
        name: '노터치 크라켄 (크툴루를 건드리지마)',
        categories: ['전략 게임', '파티 게임'],
        difficulty: '보통',
        minParticipants: 3,
        maxParticipants: 6,
        fromPlayTime: 30,
        toPlayTime: 30,
        wishCount: 11,
        imageUrl: 'https://picsum.photos/200',
      },
      {
        boardGameId: 3,
        name: '보난자',
        categories: ['전략 게임', '파티 게임', '가족 게임'],
        difficulty: '어려움',
        minParticipants: 3,
        maxParticipants: 7,
        fromPlayTime: 50,
        toPlayTime: 50,
        wishCount: 34,
        imageUrl: 'https://picsum.photos/200',
      },
      {
        boardGameId: 4,
        name: '카탄',
        categories: ['전략 게임', '테마 게임'],
        difficulty: '어려움',
        minParticipants: 3,
        maxParticipants: 4,
        fromPlayTime: 60,
        toPlayTime: 90,
        wishCount: 215,
        imageUrl: 'https://picsum.photos/200',
      },
      {
        boardGameId: 5,
        name: '꼬치의 달인',
        categories: ['가족게임', '파티 게임', '어린이 게임'],
        difficulty: '쉬움',
        minParticipants: 2,
        maxParticipants: 4,
        fromPlayTime: 15,
        toPlayTime: 30,
        wishCount: 183,
        imageUrl: 'https://picsum.photos/200',
      },
      {
        boardGameId: 6,
        name: '스플렌더',
        categories: ['전략 게임'],
        difficulty: '어려움',
        minParticipants: 2,
        maxParticipants: 4,
        fromPlayTime: 45,
        toPlayTime: 45,
        wishCount: 54,
        imageUrl: 'https://picsum.photos/200',
      },
      {
        boardGameId: 7,
        name: '노터치 크라켄 (크툴루를 건드리지마)',
        categories: ['전략 게임', '파티 게임'],
        difficulty: '보통',
        minParticipants: 3,
        maxParticipants: 6,
        fromPlayTime: 30,
        toPlayTime: 30,
        wishCount: 11,
        imageUrl: 'https://picsum.photos/200',
      },
    ],
  });
};

const boardGameWishListMocks = [
  http.get(MOCK_GET_BOARD_GAME_WISH_LIST_URL, mockGetBoardGameWishListHandler),
];

export default boardGameWishListMocks;

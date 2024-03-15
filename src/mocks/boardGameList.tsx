import { HttpResponse, HttpResponseResolver, http } from 'msw';

import { API_BASE_URL, BOARD_GAMES_API_URL } from '@/constants/apiRoutes';

export const MOCK_GET_NOTIFICATIONS_URL = `${API_BASE_URL}${BOARD_GAMES_API_URL}`;

const boardGameList = [
  {
    boardGameId: 1,
    name: 'Board Game 1',
    categories: ['워게임'],
    difficulty: '보통',
    minParticipants: 2,
    maxParticipants: 6,
    fromPlayTime: 30,
    toPlayTime: 90,
    wishCount: 101,
    imageUrl: 'https://picsum.photos/seed/1/200/300',
  },
  {
    boardGameId: 2,
    name: 'Board Game 2',
    categories: ['파티게임'],
    difficulty: '쉬움',
    minParticipants: 1,
    maxParticipants: 4,
    fromPlayTime: 20,
    toPlayTime: 60,
    wishCount: 50,
    imageUrl: 'https://picsum.photos/seed/2/200/300',
  },
  {
    boardGameId: 3,
    name: 'Board Game 3',
    categories: ['가족게임'],
    difficulty: '어려움',
    minParticipants: 2,
    maxParticipants: 8,
    fromPlayTime: 45,
    toPlayTime: 120,
    wishCount: 80,
    imageUrl: 'https://picsum.photos/seed/3/200/300',
  },
];

export const mockGetNotificationsHandler: HttpResponseResolver = async ({
  request,
}) => {
  const url = new URL(request.url);
  const difficulty = url.searchParams.get('difficulty');
  const playTimeString = url.searchParams.get('playTime');
  const categories = url.searchParams.getAll('categories');

  // 필터링을 흉내내서 조금 복잡해요.
  return HttpResponse.json({
    boardGamesInfos: boardGameList.filter(item => {
      if (difficulty && item.difficulty !== difficulty) {
        return false;
      }
      if (playTimeString) {
        const playTime = parseInt(playTimeString, 10);
        if (playTime < item.fromPlayTime || playTime > item.toPlayTime) {
          return false;
        }
      }
      if (
        categories &&
        categories.find(category => !item.categories.includes(category))
      ) {
        return false;
      }

      return true;
    }),
    currentPageNumber: 0,
    size: 20,
    hasNext: false,
  });
};

const boardGameListMocks = [
  http.get(MOCK_GET_NOTIFICATIONS_URL, mockGetNotificationsHandler),
];

export default boardGameListMocks;

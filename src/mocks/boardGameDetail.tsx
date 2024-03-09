import { HttpResponse, http } from 'msw';

import { API_BASE_URL, BOARD_GAMES_API_URL } from '@/constants/apiRoutes';

export const MOCK_GET_BOARD_GAME_DETAIL_URL = `${API_BASE_URL}${BOARD_GAMES_API_URL}/1`;

export const mockGetBoardGameDetailHandler = async () => {
  return HttpResponse.json({
    boardGameId: 1,
    name: '스플랜더',
    description: '이러이러한 게임이다~',
    categories: ['전략', '추리'],
    difficulty: '보통',
    minParticipants: 3,
    maxParticipants: 6,
    fromPlayTime: 30, //30분에서
    toPlayTime: 60, //60분 걸리는 게임
    wishCount: 10,
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzA2MTlfMTE4/MDAxNDk3ODQyMjYyNzM2.nOK6l2cgaDPMOw_4rOL9iDgm6L-agj2i4f4GTyztILYg.IVp38OydFGTppmU1YO7tOQUcibMaIp5322KSd8INH8Eg.JPEG.decoism/01.jpg?type=w800',
    isWished: false,
    myTip: {
      // 등록한 나의 공략 없을 시 null
      tipId: 5,
      nickname: 'injuniing',
      profileImageUrl:
        'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
      createdAt: '2023-12-31 14:30',
      content: '개꿀팁 갑니다',
      likeCount: 13,
    },
    tips: [
      // 나의 공략은 포함X (위에 있으므로)
      {
        tipId: 1,
        nickname: 'injuniing',
        profileImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        createdAt: '2023-12-31 14:30',
        content: '개꿀팁 갑니다',
        likeCount: 17,
        isLiked: false,
      },
      {
        tipId: 2,
        nickname: 'injuniing',
        profileImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        createdAt: '2023-12-31 14:30',
        content: '개꿀팁 갑니다',
        likeCount: 10, // 좋아요 기준 내림차순으로 정렬되어 조회
        isLiked: true,
      },
    ],
  });
};

const boardGameDetailMocks = [
  http.get(MOCK_GET_BOARD_GAME_DETAIL_URL, mockGetBoardGameDetailHandler),
];

export default boardGameDetailMocks;

import { HttpResponse, http } from 'msw';

import {
  API_BASE_URL,
  ROOMS_MY_END_GAMES_API_URL,
} from '@/constants/apiRoutes';

export const MOCK_GET_END_GAMES_URL = `${API_BASE_URL}${ROOMS_MY_END_GAMES_API_URL}`;

export const mockGetEndGameListHandler = async () => {
  return HttpResponse.json({
    roomsInfos: [
      {
        id: 2,
        title: '모집합니다',
        description: '게임 하실 분~~',
        station: '강남역()',
        time: '주말 오후',
        minAge: 20,
        maxAge: 30,
        allowedGender: '혼성',
        imageUrl:
          'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/upload/',
        minParticipants: 4,
        maxParticipants: 6,
        categories: ['전략게임', '테마게임'],
        createdAt: '2024-03-15T01:48:54',
        headCount: 2,
      },
      {
        id: 3,
        title: '카탄 하실 분',
        description:
          '항해사, 도시와 기사 확장판 있습니다\n룰 알고 계시면 좋아요',
        station: '강남역()',
        time: '주말 오후',
        minAge: 20,
        maxAge: 30,
        allowedGender: '혼성',
        imageUrl:
          'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/upload/',
        minParticipants: 3,
        maxParticipants: 4,
        categories: ['전략게임', '테마게임'],
        createdAt: '2024-03-14T02:00:08',
        headCount: 2,
      },
      {
        id: 5,
        title: '보난자',
        description: '콩 심어요',
        station: '홍대입구역()',
        time: '평일 오후',
        minAge: 25,
        maxAge: 30,
        allowedGender: '혼성',
        imageUrl:
          'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/upload/a5ce68a7-3dcf-4cd4-b11a-cbd8614ede57.jpg',
        minParticipants: 4,
        maxParticipants: 6,
        categories: [
          '워게임',
          '가족게임',
          '전략게임',
          '추상게임',
          '테마게임',
          '파티게임',
          '어린이게임',
          '컬렉터블게임',
        ],
        createdAt: '2024-03-04T02:45:28',
        headCount: 2,
      },
      {
        id: 2,
        title: '모집합니다',
        description: '게임 하실 분~~',
        station: '강남역()',
        time: '주말 오후',
        minAge: 20,
        maxAge: 30,
        allowedGender: '혼성',
        imageUrl:
          'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/upload/',
        minParticipants: 4,
        maxParticipants: 6,
        categories: ['전략게임', '테마게임'],
        createdAt: '2024-03-03T01:48:54',
        headCount: 2,
      },
      {
        id: 3,
        title: '카탄 하실 분',
        description:
          '항해사, 도시와 기사 확장판 있습니다\n룰 알고 계시면 좋아요',
        station: '강남역()',
        time: '주말 오후',
        minAge: 20,
        maxAge: 30,
        allowedGender: '혼성',
        imageUrl:
          'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/upload/',
        minParticipants: 3,
        maxParticipants: 4,
        categories: ['전략게임', '테마게임'],
        createdAt: '2024-03-02T02:00:08',
        headCount: 2,
      },
      {
        id: 5,
        title: '보난자',
        description: '콩 심어요',
        station: '홍대입구역()',
        time: '평일 오후',
        minAge: 25,
        maxAge: 30,
        allowedGender: '혼성',
        imageUrl:
          'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/upload/a5ce68a7-3dcf-4cd4-b11a-cbd8614ede57.jpg',
        minParticipants: 4,
        maxParticipants: 6,
        categories: [
          '워게임',
          '가족게임',
          '전략게임',
          '추상게임',
          '테마게임',
          '파티게임',
          '어린이게임',
          '컬렉터블게임',
        ],
        createdAt: '2024-03-01T02:45:28',
        headCount: 2,
      },
      {
        id: 2,
        title: '모집합니다',
        description: '게임 하실 분~~',
        station: '강남역()',
        time: '주말 오후',
        minAge: 20,
        maxAge: 30,
        allowedGender: '혼성',
        imageUrl:
          'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/upload/',
        minParticipants: 4,
        maxParticipants: 6,
        categories: ['전략게임', '테마게임'],
        createdAt: '2024-02-10T01:48:54',
        headCount: 2,
      },
      {
        id: 3,
        title: '카탄 하실 분',
        description:
          '항해사, 도시와 기사 확장판 있습니다\n룰 알고 계시면 좋아요',
        station: '강남역()',
        time: '주말 오후',
        minAge: 20,
        maxAge: 30,
        allowedGender: '혼성',
        imageUrl:
          'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/upload/',
        minParticipants: 3,
        maxParticipants: 4,
        categories: ['전략게임', '테마게임'],
        createdAt: '2024-02-05T02:00:08',
        headCount: 2,
      },
      {
        id: 5,
        title: '보난자',
        description: '콩 심어요',
        station: '홍대입구역()',
        time: '평일 오후',
        minAge: 25,
        maxAge: 30,
        allowedGender: '혼성',
        imageUrl:
          'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/upload/a5ce68a7-3dcf-4cd4-b11a-cbd8614ede57.jpg',
        minParticipants: 4,
        maxParticipants: 6,
        categories: [
          '워게임',
          '가족게임',
          '전략게임',
          '추상게임',
          '테마게임',
          '파티게임',
          '어린이게임',
          '컬렉터블게임',
        ],
        createdAt: '2024-02-01T02:45:28',
        headCount: 2,
      },
    ],
    currentPageNumber: 0,
    size: 20,
    hasNext: false,
  });
};

const endGameListMocks = [
  http.get(MOCK_GET_END_GAMES_URL, mockGetEndGameListHandler),
];

export default endGameListMocks;

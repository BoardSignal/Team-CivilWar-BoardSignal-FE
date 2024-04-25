import { HttpResponse, HttpResponseResolver, http } from 'msw';

import { API_BASE_URL } from '@/constants/apiRoutes';
import { ROOMS_FILTER_API_URL } from '@/constants/apiRoutes';

export const MOCK_GET_GATHERING_LIST_URL = `${API_BASE_URL}${ROOMS_FILTER_API_URL}`;

const roomsInfos = [
  {
    id: 25,
    title: '정령섬 심화 격주로 하실 1~2분 모집합니다.',
    description:
      '두 명이서 하고 있습니다.\n 3~4인이 더 재밌어요.\n 확장 텍스트가 영문이라 읽을 수 있으시면 편해요.',
    station: '국제금융센터·부산은행',
    time: '주말 오후',
    minAge: 25,
    maxAge: 30,
    allowedGender: '혼성',
    imageUrl:
      'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/upload/%EB%B3%B4%EB%93%9C%EC%8B%9C%EA%B7%B8%EB%84%907.png',
    minParticipants: 3,
    maxParticipants: 6,
    categories: ['테마게임', '파티게임'],
    createdAt: '2024-03-11T15:23:48',
    headCount: 1,
  },
  {
    id: 24,
    title: '아르낙 테플/룰마 하실분',
    description: '확장 텍스트가 영문이라 읽을 수 있으시면 편해요.',
    station: '강남역',
    time: '평일 오후',
    minAge: 20,
    maxAge: 30,
    allowedGender: '혼성',
    imageUrl: 'https://picsum.photos/200',
    minParticipants: 3,
    maxParticipants: 6,
    categories: ['파티게임'],
    createdAt: '2024-03-11T15:11:25',
    headCount: 1,
  },
  {
    id: 23,
    title: '카탄 확장판',
    description: '항해사 하실 분 구해요!',
    station: '강남역',
    time: '평일 오전',
    minAge: 10,
    maxAge: 30,
    allowedGender: '혼성',
    imageUrl: null,
    minParticipants: 3,
    maxParticipants: 4,
    categories: ['전략게임'],
    createdAt: '2024-03-11T14:52:03',
    headCount: 1,
  },
  {
    id: 22,
    title: '정령섬 심화 격주로 하실 1~2분',
    description: '설명',
    station: '사당역',
    time: '주말 오후',
    minAge: 25,
    maxAge: 30,
    allowedGender: '혼성',
    imageUrl: null,
    minParticipants: 4,
    maxParticipants: 6,
    categories: ['파티게임'],
    createdAt: '2024-03-11T14:51:26',
    headCount: 1,
  },
  {
    id: 21,
    title: '모집합니다!!',
    description: '설명',
    station: '용산역',
    time: '평일 오후',
    minAge: 20,
    maxAge: 30,
    allowedGender: '여성',
    imageUrl: 'https://picsum.photos/200',
    minParticipants: 4,
    maxParticipants: 6,
    categories: ['전략게임'],
    createdAt: '2024-03-11T14:12:56',
    headCount: 1,
  },
  {
    id: 20,
    title: '모집중입니다',
    description: '모임',
    station: '뚝섬역',
    time: '',
    minAge: 20,
    maxAge: 30,
    allowedGender: '여성',
    imageUrl: null,
    minParticipants: 4,
    maxParticipants: 6,
    categories: ['추상게임'],
    createdAt: '2024-03-11T14:01:57',
    headCount: 1,
  },
  {
    id: 19,
    title: '뱅, 보난자 등',
    description: '설명',
    station: '뚝섬역',
    time: '평일 오전',
    minAge: 25,
    maxAge: 30,
    allowedGender: '여성',
    imageUrl: null,
    minParticipants: 4,
    maxParticipants: 6,
    categories: ['전략게임', '추상게임'],
    createdAt: '2024-03-11T14:00:16',
    headCount: 1,
  },
  {
    id: 18,
    title: '모집합니다',
    description: '카탄 하실 분',
    station: '강남역',
    time: '주말 오후',
    minAge: 20,
    maxAge: 30,
    allowedGender: '혼성',
    imageUrl: null,
    minParticipants: 3,
    maxParticipants: 4,
    categories: ['전략게임'],
    createdAt: '2024-03-11T13:56:00',
    headCount: 1,
  },
];

export const mockGetGatheringListHandler: HttpResponseResolver = async ({
  request,
}) => {
  const url = new URL(request.url);
  const stations = url.searchParams.getAll('station');
  const times = url.searchParams
    .getAll('time')
    .map(time => time.replace('_', ' '));
  const categories = url.searchParams.getAll('category');

  return HttpResponse.json({
    roomsInfos: roomsInfos.filter(item => {
      if (stations.length > 0 && !stations.includes(item.station)) {
        return false;
      }
      if (times.length > 0 && !times.includes(item.time)) {
        return false;
      }
      if (
        categories.length > 0 &&
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

const gatheringListMocks = [
  http.get(MOCK_GET_GATHERING_LIST_URL, mockGetGatheringListHandler),
];

export default gatheringListMocks;

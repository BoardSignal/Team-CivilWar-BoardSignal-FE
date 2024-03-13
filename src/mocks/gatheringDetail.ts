import { HttpResponse, http } from 'msw';

import { API_BASE_URL, ROOMS_API_URL } from '@/constants/apiRoutes';

export const MOCK_GET_GATHERING_DETAIL_URL = `${API_BASE_URL}${ROOMS_API_URL}/1`;

export const mockGetGatheringDetailHandler = async () => {
  return HttpResponse.json({
    roomId: 1,
    title: '오후',
    description: '생성',
    startTime: '주말 오후',
    place: '영등포역 ',
    minAge: 20,
    maxAge: 30,
    minParticipants: 4,
    maxParticipants: 6,
    imageUrl: 'https://boardsignal-image.s3.ap-northeast-2.amazonaws.com/',
    isLeader: true,
    isFix: '확정',
    allowedGender: '혼성',
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
    participantResponse: [
      {
        userId: 4,
        nickname: 'hannah',
        ageGroup: '20대',
        profileImageUrl:
          'https://ssl.pstatic.net/static/pwe/address/img_profile.png',
        isLeader: true,
        mannerScore: 36.5,
      },
      {
        userId: 1,
        nickname: '손호민',
        ageGroup: '20대',
        profileImageUrl:
          'http://t1.kakaocdn.net/account_images/default_profile.jpeg.twg.thumb.R640x640',
        isLeader: false,
        mannerScore: 36.5,
      },
    ],
    createdAt: '03-09T15:57:04',
  });
};

const gatheringDetailMocks = [
  http.get(MOCK_GET_GATHERING_DETAIL_URL, mockGetGatheringDetailHandler),
];

export default gatheringDetailMocks;

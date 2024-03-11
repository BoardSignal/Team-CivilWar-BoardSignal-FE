import { HttpResponse, http } from 'msw';

import { API_BASE_URL, USERS_API_URL } from '@/constants/apiRoutes';

export const MOCK_GET_PROFILE_URL = `${API_BASE_URL}${USERS_API_URL}/1`;

export const mockGetProfileHandler = async () => {
  return HttpResponse.json({
    profileUserId: 1,
    nickname: 'evan',
    signal: 10,
    preferCategories: ['전략', '추리'],
    gender: '남성',
    ageGroup: '20대',
    profileImageUrl: null,
    mannerScore: 37.5,
    reviews: [
      {
        content: '시간을 잘 지켜요',
        score: 12,
      },
      {
        content: '착해요',
        score: 9,
      },
      {
        content: '게임을 재밌게 해요',
        score: 4,
      },
    ],
    wishCount: 3,
    isProfileManager: true,
  });
};

const profilesMocks = [http.get(MOCK_GET_PROFILE_URL, mockGetProfileHandler)];

export default profilesMocks;

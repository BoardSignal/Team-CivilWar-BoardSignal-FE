import { HttpResponse, http } from 'msw';

import { API_BASE_URL, AUTH_API_URL } from '@/constants/apiRoutes';

export const MOCK_GET_AUTH_URL = `${API_BASE_URL}${AUTH_API_URL}`;

export const mockGetAuthHandler = async () => {
  return HttpResponse.json({
    id: 4,
    email: 'test@email.com',
    nickname: 'hannah',
    age: 24,
    ageGroup: '20대',
    gender: '여성',
    isJoined: true,
  });
};

const authMocks = [http.get(MOCK_GET_AUTH_URL, mockGetAuthHandler)];

export default authMocks;

import { useMutation } from '@tanstack/react-query';

import { AUTH_LOGIN_NAVER_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface LoginResponse {
  accessToken: string;
  isJoined: boolean;
}
const postNaverLogin = () => {
  return api.post<LoginResponse>({
    url: AUTH_LOGIN_NAVER_API_URL,
  });
};

export const usePostNaverLoginApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postNaverLogin,
  });

  return async () => {
    const { isBadRequest, data } = await mutateAsync();
    if (isBadRequest) {
      throw new Error('네이버 로그인 과정 중 예상치 못한 오류가 발생했어요.');
    }

    return data;
  };
};

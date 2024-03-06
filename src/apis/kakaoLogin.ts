import { useMutation } from '@tanstack/react-query';

import { AUTH_LOGIN_KAKAO_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface LoginResponse {
  accessToken: string;
  isJoined: boolean;
}

const postKakaoLogin = () => {
  return api.post<LoginResponse>({
    url: AUTH_LOGIN_KAKAO_API_URL,
  });
};

export const usePostKakaoLoginApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postKakaoLogin,
  });

  return async () => {
    const { isBadRequest, data } = await mutateAsync();
    if (isBadRequest) {
      throw new Error('카카오 로그인 과정 중 예상치 못한 오류가 발생했어요.');
    }

    return data;
  };
};

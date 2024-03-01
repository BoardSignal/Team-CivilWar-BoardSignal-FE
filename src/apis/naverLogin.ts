import { useMutation } from '@tanstack/react-query';

import { api } from './core';

interface LoginResponse {
  accessToken: string;
  isJoined: boolean;
}
export const postNaverLogin = () => {
  return api.post<LoginResponse>({
    url: '/auth/login/naver',
  });
};

export const usePostNaverLogin = () => {
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

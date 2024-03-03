import { useMutation } from '@tanstack/react-query';

import { api } from './core';

interface LoginResponse {
  accessToken: string;
  isJoined: boolean;
}

const postKakaoLogin = () => {
  return api.post<LoginResponse>({
    url: '/auth/login/kakao',
  });
};

export const usePostKakaoLoginApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postKakaoLogin,
  });

  return mutateAsync;
};

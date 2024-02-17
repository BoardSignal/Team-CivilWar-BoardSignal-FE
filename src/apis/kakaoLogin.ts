import { useMutation } from '@tanstack/react-query';

import { api } from './core';

interface LoginResponse {
  accessToken: string;
  isJoined: boolean;
}

const postKakaoLogin = () => {
  return api.post<LoginResponse>({
    url: '/api/v1/auth/login/kakao',
  });
};

export const usePostKakaoLogin = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postKakaoLogin,
  });

  return mutateAsync;
};

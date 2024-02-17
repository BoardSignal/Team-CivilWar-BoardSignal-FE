import { useMutation } from '@tanstack/react-query';

import { api } from './core';

interface LoginResponse {
  accessToken: string;
  isJoined: boolean;
}
export const postNaverLogin = () => {
  return api.post<LoginResponse>({
    url: '/api/v1/auth/login/naver',
  });
};

export const usePostNaverLogin = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postNaverLogin,
  });

  return mutateAsync;
};

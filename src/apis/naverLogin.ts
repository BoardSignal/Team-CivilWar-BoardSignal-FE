import { useMutation } from '@tanstack/react-query';

import { api } from './core';

interface LoginResponse {
  accessToken: string;
  isJoined: boolean;
}
const postNaverLogin = () => {
  return api.post<LoginResponse>({
    url: '/auth/login/naver',
  });
};

export const usePostNaverLogin = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postNaverLogin,
  });

  return mutateAsync;
};

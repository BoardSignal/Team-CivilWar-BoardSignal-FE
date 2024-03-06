import { useMutation } from '@tanstack/react-query';

import { AUTH_LOGOUT_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

const postLogout = () =>
  api.post({
    url: AUTH_LOGOUT_API_URL,
  });

export const useLogoutApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postLogout,
  });

  return mutateAsync;
};

import { useMutation } from '@tanstack/react-query';

import { FCM_TOKEN_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface FcmTokenRequest {
  token: string;
}

const postFcmToken = ({ token }: FcmTokenRequest) =>
  api.post({
    url: FCM_TOKEN_API_URL,
    data: {
      token,
    },
  });

export const usePostFcmTokenApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postFcmToken,
  });

  return mutateAsync;
};

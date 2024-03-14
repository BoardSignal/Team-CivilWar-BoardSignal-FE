import { useMutation } from '@tanstack/react-query';

import { FCM_TOKEN_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface FCMTokenRequest {
  token: string;
}

const postFCMToken = ({ token }: FCMTokenRequest) =>
  api.post({
    url: FCM_TOKEN_API_URL,
    data: {
      token,
    },
  });

export const usePostFCMTokenApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postFCMToken,
  });

  return mutateAsync;
};

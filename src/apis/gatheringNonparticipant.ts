import { useMutation } from '@tanstack/react-query';

import { ROOMS_OUT_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export const postGatheringNonparticipants = (roomId: string) =>
  api.post({
    url: `${ROOMS_OUT_API_URL}/${roomId}`,
  });

export const usePostGatheringNonparticipantsApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postGatheringNonparticipants,
  });

  return mutateAsync;
};

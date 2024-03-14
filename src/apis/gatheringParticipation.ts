import { useMutation } from '@tanstack/react-query';

import { ROOMS_IN_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export const postGatheringParticipants = (roomId: string) =>
  api.post({
    url: `${ROOMS_IN_API_URL}/${roomId}`,
  });

export const usePostGatheringParticipantsApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postGatheringParticipants,
  });

  return mutateAsync;
};

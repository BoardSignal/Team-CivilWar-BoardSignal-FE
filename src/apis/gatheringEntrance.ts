import { useMutation } from '@tanstack/react-query';

import { ROOMS_IN_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export const postGatheringEntrance = (roomId: string) =>
  api.post({
    url: `${ROOMS_IN_API_URL}/${roomId}`,
  });

export const usePostGatheringEntranceApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postGatheringEntrance,
  });

  return mutateAsync;
};

import { useMutation } from '@tanstack/react-query';

import { ROOMS_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export const gatheringDelete = (roomId: string) =>
  api.delete({
    url: `${ROOMS_API_URL}/${roomId}`,
  });

export const useDeleteGatheringApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: gatheringDelete,
  });

  return mutateAsync;
};

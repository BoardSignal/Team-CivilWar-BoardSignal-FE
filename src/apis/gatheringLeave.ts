import { useMutation } from '@tanstack/react-query';

import { ROOMS_OUT_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export const postGatheringLeave = (roomId: string) =>
  api.post({
    url: `${ROOMS_OUT_API_URL}/${roomId}`,
  });

export const usePostGatheringLeaveApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postGatheringLeave,
  });

  return mutateAsync;
};

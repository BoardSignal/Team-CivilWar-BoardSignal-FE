import { useMutation } from '@tanstack/react-query';

import { ROOMS_KICK_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export const postKickParticipant = (roomId: number, userId: number) =>
  api.post({
    url: `${ROOMS_KICK_API_URL}`,
    data: {
      userId,
      roomId,
    },
  });

export const useKickParticipantApi = (roomId: number) => {
  const { mutateAsync } = useMutation({
    mutationFn: (userId: number) => postKickParticipant(roomId, userId),
  });

  return mutateAsync;
};

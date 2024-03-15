import { useMutation } from '@tanstack/react-query';

import { ROOMS_KICK_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export const kickParticipants = (roomId: number, userId: number) =>
  api.post({
    url: `${ROOMS_KICK_API_URL}`,
    data: {
      userId,
      roomId,
    },
  });

export const useKickParticipantsApi = (roomId: number) => {
  const { mutateAsync } = useMutation({
    mutationFn: (userId: number) => kickParticipants(roomId, userId),
  });

  return mutateAsync;
};

import { useMutation } from '@tanstack/react-query';

import { ROOMS_KICK_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export const kickParticipants = (roomId: string, userId: string) =>
  api.delete({
    url: `${ROOMS_KICK_API_URL}`,
    data: {
      userId,
      roomId,
    },
  });

export const useKickParticipantsApi = (roomId: string) => {
  const { mutateAsync } = useMutation({
    mutationFn: (userId: string) => kickParticipants(roomId, userId),
  });

  return mutateAsync;
};

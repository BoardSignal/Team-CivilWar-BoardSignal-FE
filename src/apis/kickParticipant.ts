import { useMutation } from '@tanstack/react-query';

import { ROOMS_KICK_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface KickParticipantResponse {
  kickOutUserNickname: string;
}

export const postKickParticipant = (roomId: number, userId: number) =>
  api.post<KickParticipantResponse>({
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

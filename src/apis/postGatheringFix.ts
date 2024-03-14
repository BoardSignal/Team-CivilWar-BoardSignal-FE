import { useMutation } from '@tanstack/react-query';

import { ROOMS_FIX_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export interface GatheringFixRequest {
  meetingTime: Date;
  line: string;
  station: string;
  meetingPlace: string;
}

interface GatheringFix {
  gatheringFix: GatheringFixRequest;
  roomId: string;
}

export const postGatheringFix = ({ roomId, gatheringFix }: GatheringFix) =>
  api.post({
    url: `${ROOMS_FIX_API_URL}/${roomId}`,
    data: {
      ...gatheringFix,
    },
  });

export const usePostGatheringFix = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postGatheringFix,
  });

  return mutateAsync;
};

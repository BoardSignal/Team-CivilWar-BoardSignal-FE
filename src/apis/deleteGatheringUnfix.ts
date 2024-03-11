import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ROOMS_UNFIX_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

export interface GatheringUnfixRequest {
  gatheringId: string;
  reason: string;
}

const deletetGatheringUnfix = ({
  gatheringId,
  reason,
}: GatheringUnfixRequest) =>
  api.delete({
    url: `${ROOMS_UNFIX_API_URL}/${gatheringId}`,
    data: { reason },
  });

export const useDeleteGatheringUnfixApi = (gatheringId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: deletetGatheringUnfix,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['gathering-detail', gatheringId],
      }),
  });

  return mutateAsync;
};

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BOARD_GAMES_TIP_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface CreateTipResponse {
  content: string;
}

export interface CreateTipRequest {
  boardGameId: string;
  content: string;
}

export const postBoardGameTip = ({ boardGameId, content }: CreateTipRequest) =>
  api.post<CreateTipResponse>({
    url: `${BOARD_GAMES_TIP_API_URL}/${boardGameId}`,
    data: {
      content,
    },
  });

const deleteBoardGameTip = (tipId: number) =>
  api.delete({
    url: `board-games/${tipId}`,
  });

export const usePostBoardGameTipApi = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postBoardGameTip,
  });

  return mutateAsync;
};

export const useDeleteBoardGameTipApi = (
  tipId: number,
  boardGameId: string,
) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => deleteBoardGameTip(tipId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['boardGameDetail', boardGameId],
      }),
  });

  return mutateAsync;
};

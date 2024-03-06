import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from './core';

interface BoardGameTipLikeResponse {
  wishCount: number;
  tipId: number;
}

const postBoardGameTipLike = (tipId: number) =>
  api.post<BoardGameTipLikeResponse>({
    url: `/board-games/like/${tipId}`,
  });

const deleteBoardGameTipLike = (tipId: number) =>
  api.delete<BoardGameTipLikeResponse>({
    url: `/board-games/like/${tipId}`,
  });

export const usePostBoardGameTipLikeApi = (
  tipId: number,
  boardGameId: string,
) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => postBoardGameTipLike(tipId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['boardGameDetail', boardGameId],
      }),
  });

  return mutateAsync;
};

export const useDeleteBoardGameTipLikeApi = (
  tipId: number,
  boardGameId: string,
) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => deleteBoardGameTipLike(tipId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['boardGameDetail', boardGameId],
      }),
  });

  return mutateAsync;
};

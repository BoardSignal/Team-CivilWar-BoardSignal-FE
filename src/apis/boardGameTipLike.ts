import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BOARD_GAMES_LIKE_API_URL } from '@/constants/apiRoutes';
import { BOARD_GAME_DETAIL_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

interface BoardGameTipLikeResponse {
  wishCount: number;
  tipId: number;
}

const postBoardGameTipLike = (tipId: number) =>
  api.post<BoardGameTipLikeResponse>({
    url: `${BOARD_GAMES_LIKE_API_URL}/${tipId}`,
  });

const deleteBoardGameTipLike = (tipId: number) =>
  api.delete<BoardGameTipLikeResponse>({
    url: `${BOARD_GAMES_LIKE_API_URL}/${tipId}`,
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
        queryKey: [BOARD_GAME_DETAIL_QUERY_KEY, boardGameId],
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
        queryKey: [BOARD_GAME_DETAIL_QUERY_KEY, boardGameId],
      }),
  });

  return mutateAsync;
};

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BOARD_GAMES_WISH_API_URL } from '@/constants/apiRoutes';
import { BOARD_GAME_DETAIL_QUERY_KEY } from '@/constants/queryKey';

import { api } from './core';

interface BoardGameWishResponse {
  wishCount: number;
}

const postBoardGameWish = (boardGameId: string) =>
  api.post<BoardGameWishResponse>({
    url: `${BOARD_GAMES_WISH_API_URL}/${boardGameId}`,
  });

const deleteBoardGameWish = (boardGameId: string) =>
  api.delete<BoardGameWishResponse>({
    url: `${BOARD_GAMES_WISH_API_URL}/${boardGameId}`,
  });

export const usePostBoardGameWishApi = (boardGameId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => postBoardGameWish(boardGameId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [BOARD_GAME_DETAIL_QUERY_KEY, boardGameId],
      }),
  });

  return mutateAsync;
};

export const useDeleteBoardGameWishApi = (boardGameId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => deleteBoardGameWish(boardGameId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [BOARD_GAME_DETAIL_QUERY_KEY, boardGameId],
      }),
  });

  return mutateAsync;
};

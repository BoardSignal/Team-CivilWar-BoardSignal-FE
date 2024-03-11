import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BOARD_GAMES_WISH_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface BoardGameWishResponse {
  wishCount: number;
}

export interface BoardGameWishRequest {
  boardGameId: string;
}

const postBoardGameWish = ({ boardGameId }: BoardGameWishRequest) =>
  api.post<BoardGameWishResponse>({
    url: `${BOARD_GAMES_WISH_API_URL}/${boardGameId}`,
  });

const deleteBoardGameWish = ({ boardGameId }: BoardGameWishRequest) =>
  api.delete<BoardGameWishResponse>({
    url: `${BOARD_GAMES_WISH_API_URL}/${boardGameId}`,
  });

export const usePostBoardGameWishApi = (boardGameId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: postBoardGameWish,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['board-game-detail', boardGameId],
      }),
  });

  return mutateAsync;
};

export const useDeleteBoardGameWishApi = (boardGameId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: deleteBoardGameWish,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['board-game-detail', boardGameId],
      }),
  });

  return mutateAsync;
};

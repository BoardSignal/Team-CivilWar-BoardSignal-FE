import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BOARD_GAMES_LIKE_API_URL } from '@/constants/apiRoutes';

import { api } from './core';

interface BoardGameTipLikeResponse {
  likeCount: number;
  tipId: number;
}

export interface BoardGameTipLikeRequest {
  tipId: number;
}

const postBoardGameTipLike = ({ tipId }: BoardGameTipLikeRequest) =>
  api.post<BoardGameTipLikeResponse>({
    url: `${BOARD_GAMES_LIKE_API_URL}/${tipId}`,
  });

const deleteBoardGameTipLike = ({ tipId }: BoardGameTipLikeRequest) =>
  api.delete<BoardGameTipLikeResponse>({
    url: `${BOARD_GAMES_LIKE_API_URL}/${tipId}`,
  });

export const usePostBoardGameTipLikeApi = (boardGameId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: postBoardGameTipLike,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['board-game-detail', boardGameId],
      }),
  });

  return mutateAsync;
};

export const useDeleteBoardGameTipLikeApi = (boardGameId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: deleteBoardGameTipLike,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['board-game-detail', boardGameId],
      }),
  });

  return mutateAsync;
};

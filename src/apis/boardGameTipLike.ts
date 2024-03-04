import { useMutation } from '@tanstack/react-query';

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

export const usePostBoardGameTipLikeApi = (tipId: number) => {
  const { mutateAsync } = useMutation({
    mutationFn: () => postBoardGameTipLike(tipId),
  });

  return mutateAsync;
};

export const useDeleteBoardGameTipLikeApi = (tipId: number) => {
  const { mutateAsync } = useMutation({
    mutationFn: () => deleteBoardGameTipLike(tipId),
  });

  return mutateAsync;
};

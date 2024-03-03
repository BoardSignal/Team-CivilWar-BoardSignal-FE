import { useMutation } from '@tanstack/react-query';

import { api } from './core';

interface BoardGameWishResponse {
  wishCount: number;
}

const postBoardGameWish = (boardGameId: string) =>
  api.post<BoardGameWishResponse>({
    url: `/board-games/wish/${boardGameId}`,
  });

const deleteBoardGameWish = (boardGameId: string) =>
  api.delete<BoardGameWishResponse>({
    url: `/board-games/wish/${boardGameId}`,
  });

export const usePostBoardGameWishApi = (boardGameId: string) => {
  const { mutateAsync } = useMutation({
    mutationFn: () => postBoardGameWish(boardGameId),
  });

  return mutateAsync;
};

export const useDeleteBoardGameWishApi = (boardGameId: string) => {
  const { mutateAsync } = useMutation({
    mutationFn: () => deleteBoardGameWish(boardGameId),
  });

  return mutateAsync;
};

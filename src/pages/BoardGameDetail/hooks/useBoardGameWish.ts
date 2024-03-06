import { useQueryClient } from '@tanstack/react-query';

import {
  useDeleteBoardGameWishApi,
  usePostBoardGameWishApi,
} from '@/apis/boardGameWish';

export const useBoardGameWish = (boardGameId: string) => {
  const postApi = usePostBoardGameWishApi(boardGameId);
  const deleteApi = useDeleteBoardGameWishApi(boardGameId);
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({
    queryKey: ['boardGameDetail', boardGameId],
  });
  return {
    postBoardGameWish: async () => {
      await postApi();
    },
    deleteBoardGameWish: async () => {
      await deleteApi();
    },
  };
};

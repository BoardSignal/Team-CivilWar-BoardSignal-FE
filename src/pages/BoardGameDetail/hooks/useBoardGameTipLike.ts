import { useQueryClient } from '@tanstack/react-query';

import {
  useDeleteBoardGameTipLikeApi,
  usePostBoardGameTipLikeApi,
} from '@/apis/boardGameTipLike';

export const useBoardGameTipLike = (tipId: number, boardGameId: string) => {
  const postApi = usePostBoardGameTipLikeApi(tipId);
  const deleteApi = useDeleteBoardGameTipLikeApi(tipId);
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({
    queryKey: ['boardGameDetail', boardGameId],
  });

  return {
    postBoardGameTipLike: async () => {
      await postApi();
    },
    deleteBoardGameTipLike: async () => {
      await deleteApi();
    },
  };
};

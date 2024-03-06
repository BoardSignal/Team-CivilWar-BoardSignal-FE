import {
  useDeleteBoardGameTipLikeApi,
  usePostBoardGameTipLikeApi,
} from '@/apis/boardGameTipLike';

export const useBoardGameTipLike = (tipId: number, boardGameId: string) => {
  const postApi = usePostBoardGameTipLikeApi(tipId, boardGameId);
  const deleteApi = useDeleteBoardGameTipLikeApi(tipId, boardGameId);

  return {
    postBoardGameTipLike: async () => {
      await postApi();
    },
    deleteBoardGameTipLike: async () => {
      await deleteApi();
    },
  };
};

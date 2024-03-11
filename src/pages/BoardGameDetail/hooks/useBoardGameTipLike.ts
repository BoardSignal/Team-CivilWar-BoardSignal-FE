import {
  type BoardGameTipLikeRequest,
  useDeleteBoardGameTipLikeApi,
  usePostBoardGameTipLikeApi,
} from '@/apis/boardGameTipLike';

export const useBoardGameTipLike = (boardGameId: string) => {
  const postApi = usePostBoardGameTipLikeApi(boardGameId);
  const deleteApi = useDeleteBoardGameTipLikeApi(boardGameId);

  return {
    postBoardGameTipLike: async (tipId: BoardGameTipLikeRequest) => {
      await postApi(tipId);
    },
    deleteBoardGameTipLike: async (tipId: BoardGameTipLikeRequest) => {
      await deleteApi(tipId);
    },
  };
};

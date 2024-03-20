import {
  useDeleteBoardGameTipLikeApi,
  usePostBoardGameTipLikeApi,
} from '@/apis/boardGameTipLike';

export const useBoardGameTipLike = (tipId: number, boardGameId: string) => {
  const postBoardGameTipLikeApi = usePostBoardGameTipLikeApi(
    tipId,
    boardGameId,
  );
  const deleteBoardGameTipLikeApi = useDeleteBoardGameTipLikeApi(
    tipId,
    boardGameId,
  );

  return {
    postBoardGameTipLike: async () => {
      await postBoardGameTipLikeApi();
    },
    deleteBoardGameTipLike: async () => {
      await deleteBoardGameTipLikeApi();
    },
  };
};

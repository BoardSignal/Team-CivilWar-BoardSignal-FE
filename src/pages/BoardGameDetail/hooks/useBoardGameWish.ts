import {
  useDeleteBoardGameWishApi,
  usePostBoardGameWishApi,
} from '@/apis/boardGameWish';

export const useBoardGameWish = (boardGameId: string) => {
  const postApi = usePostBoardGameWishApi(boardGameId);
  const deleteApi = useDeleteBoardGameWishApi(boardGameId);

  return {
    postBoardGameWish: async () => {
      await postApi();
    },
    deleteBoardGameWish: async () => {
      await deleteApi();
    },
  };
};

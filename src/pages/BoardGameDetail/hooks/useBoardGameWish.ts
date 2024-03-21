import {
  useDeleteBoardGameWishApi,
  usePostBoardGameWishApi,
} from '@/apis/boardGameWish';

export const useBoardGameWish = (boardGameId: string) => {
  const postBoardGameWishApi = usePostBoardGameWishApi(boardGameId);
  const deleteBoardGameWishApi = useDeleteBoardGameWishApi(boardGameId);

  return {
    postBoardGameWish: async () => {
      await postBoardGameWishApi();
    },
    deleteBoardGameWish: async () => {
      await deleteBoardGameWishApi();
    },
  };
};

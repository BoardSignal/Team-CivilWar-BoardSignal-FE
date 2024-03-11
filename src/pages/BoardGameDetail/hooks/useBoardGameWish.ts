import {
  type BoardGameWishRequest,
  useDeleteBoardGameWishApi,
  usePostBoardGameWishApi,
} from '@/apis/boardGameWish';

export const useBoardGameWish = (boardGameId: string) => {
  const postApi = usePostBoardGameWishApi(boardGameId);
  const deleteApi = useDeleteBoardGameWishApi(boardGameId);

  return {
    postBoardGameWish: async (boardGameId: BoardGameWishRequest) => {
      await postApi(boardGameId);
    },
    deleteBoardGameWish: async (boardGameId: BoardGameWishRequest) => {
      await deleteApi(boardGameId);
    },
  };
};

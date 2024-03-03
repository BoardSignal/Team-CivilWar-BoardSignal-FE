import {
  useDeleteBoardGameWishApi,
  usePostBoardGameWishApi,
} from '@/apis/boardGameWish';

export const useBoardGameWish = (boardGameId: string) => {
  const postApi = usePostBoardGameWishApi(boardGameId);
  const deleteApi = useDeleteBoardGameWishApi(boardGameId);

  return {
    postBoardGameWish: async () => {
      try {
        await postApi();
      } catch (error) {
        console.error(error);
      }
    },
    deleteBoardGameWish: async () => {
      try {
        await deleteApi();
      } catch (error) {
        console.error(error);
      }
    },
  };
};

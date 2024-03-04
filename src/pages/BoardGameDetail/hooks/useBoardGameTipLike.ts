import {
  useDeleteBoardGameTipLikeApi,
  usePostBoardGameTipLikeApi,
} from '@/apis/boardGameTipLike';

export const useBoardGameTipLike = (tipId: number) => {
  const postApi = usePostBoardGameTipLikeApi(tipId);
  const deleteApi = useDeleteBoardGameTipLikeApi(tipId);

  return {
    postBoardGameTipLike: async () => {
      try {
        await postApi();
      } catch (error) {
        console.error(error);
      }
    },
    deleteBoardGameTipLike: async () => {
      try {
        await deleteApi();
      } catch (error) {
        console.error(error);
      }
    },
  };
};

import { useDeleteBoardGameTipApi } from '@/apis/boardGameTip';

export const useDeleteBoardGameTip = (tipId: number) => {
  const deleteBoardGameTipApi = useDeleteBoardGameTipApi(tipId);

  return {
    deleteBoardGameTip: async () => {
      await deleteBoardGameTipApi();
    },
  };
};

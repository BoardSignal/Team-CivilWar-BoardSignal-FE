import { useDeleteBoardGameTipApi } from '@/apis/boardGameTip';

export const useDeleteBoardGameTip = (tipId: number, boardGameID: string) => {
  const deleteBoardGameTipApi = useDeleteBoardGameTipApi(tipId, boardGameID);

  return {
    deleteBoardGameTip: async () => {
      await deleteBoardGameTipApi();
    },
  };
};

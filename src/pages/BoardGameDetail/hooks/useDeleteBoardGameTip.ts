import {
  type DeleteBoardGameTipRequest,
  useDeleteBoardGameTipApi,
} from '@/apis/boardGameTip';

export const useDeleteBoardGameTip = (boardGameId: string) => {
  const deleteApi = useDeleteBoardGameTipApi(boardGameId);

  return {
    deleteBoardGameTip: async (tipId: DeleteBoardGameTipRequest) => {
      await deleteApi(tipId);
    },
  };
};

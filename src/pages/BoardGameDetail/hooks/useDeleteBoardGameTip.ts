import { useDeleteBoardGameTipApi } from '@/apis/boardGameTip';

export const useDeleteBoardGameTip = async (
  tipId: number,
  boardGameID: string,
) => {
  const deleteBoardGameTipApi = useDeleteBoardGameTipApi(tipId, boardGameID);

  return await deleteBoardGameTipApi();
};

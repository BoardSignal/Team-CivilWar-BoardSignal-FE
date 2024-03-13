import { useDeleteBoardGameTipApi } from '@/apis/boardGameTip';
import { showErrorToast } from '@/utils/showToast';

export const useDeleteBoardGameTip = (
  tipId: number,
  boardGameID: string,
  onOpenModal: () => void,
) => {
  const deleteBoardGameTipApi = useDeleteBoardGameTipApi(tipId, boardGameID);

  return async () => {
    const { data, isOk, isBadRequest } = await deleteBoardGameTipApi();

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};

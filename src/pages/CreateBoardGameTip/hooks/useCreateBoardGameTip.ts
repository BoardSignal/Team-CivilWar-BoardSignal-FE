import { usePostBoardGameTipApi } from '@/apis/boardGameTip';
import { showErrorToast } from '@/utils/showToast';

import type { OnBoardGameTipCreate } from '../components/CreateBoardGameTipForm';

const useCreateBoardGameTip = (
  onCreate: OnBoardGameTipCreate,
  boardGameId: string,
) => {
  const boardGameTipCreateApi = usePostBoardGameTipApi(boardGameId);

  return async (content: string) => {
    const { data, isBadRequest } = await boardGameTipCreateApi(content);
    if (isBadRequest) {
      return showErrorToast(data.message);
    }
    onCreate();
  };
};

export default useCreateBoardGameTip;

import { usePostBoardGameTipApi } from '@/apis/boardGameTip';
import type { CreateBoardGameTipRequest } from '@/apis/boardGameTip';
import { showErrorToast } from '@/utils/showToast';

import type { OnBoardGameTipCreate } from '../components/CreateBoardGameTipForm';

const useCreateBoardGameTip = (onCreate: OnBoardGameTipCreate) => {
  const boardGameTipCreateApi = usePostBoardGameTipApi();

  return async (request: CreateBoardGameTipRequest) => {
    const { data, isBadRequest } = await boardGameTipCreateApi(request);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    onCreate();
  };
};

export default useCreateBoardGameTip;

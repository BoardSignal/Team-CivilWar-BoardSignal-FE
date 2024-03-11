import {
  type GatheringUnfixRequest,
  useDeleteGatheringUnfixApi,
} from '@/apis/deleteGatheringUnfix';
import { showErrorToast } from '@/utils/showToast';

import type { OnGatheringUnfix } from '../components/GatheringUnfixForm';

const useGatheringUnfix = (onUnfix: OnGatheringUnfix, gatheringId: string) => {
  const gatheringUnfixApi = useDeleteGatheringUnfixApi(gatheringId);

  return async (request: GatheringUnfixRequest) => {
    const { data, isBadRequest } = await gatheringUnfixApi(request);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    onUnfix();
  };
};

export default useGatheringUnfix;

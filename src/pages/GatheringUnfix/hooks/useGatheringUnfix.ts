import { useDeleteGatheringUnfixApi } from '@/apis/gatheringUnfix';
import { showErrorToast } from '@/utils/showToast';

import type { OnGatheringUnfix } from '../components/GatheringUnfixForm';

const useGatheringUnfix = (onUnfix: OnGatheringUnfix, gatheringId: string) => {
  const gatheringUnfixApi = useDeleteGatheringUnfixApi(gatheringId);

  return async (reason: string) => {
    const { data, isBadRequest } = await gatheringUnfixApi({
      reason,
      gatheringId,
    });

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    onUnfix();
  };
};

export default useGatheringUnfix;

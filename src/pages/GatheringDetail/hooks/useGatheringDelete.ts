import { useDeleteGatheringApi } from '@/apis/gatheringDelete';
import { showErrorToast } from '@/utils/showToast';

export const useGathering = () => {
  const gatheringDeleteApi = useDeleteGatheringApi();

  return async (roomId: string, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await gatheringDeleteApi(roomId);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};

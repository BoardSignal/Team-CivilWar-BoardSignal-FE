import { usePostGatheringEntranceApi } from '@/apis/gatheringEntrance';
import { showErrorToast } from '@/utils/showToast';

export const useGatheringEntrance = () => {
  const postGatheringEntranceApi = usePostGatheringEntranceApi();

  return async (roomId: string, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await postGatheringEntranceApi(roomId);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};

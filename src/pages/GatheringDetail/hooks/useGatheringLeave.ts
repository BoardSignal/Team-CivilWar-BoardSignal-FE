import { usePostGatheringLeaveApi } from '@/apis/gatheringLeave';
import { showErrorToast } from '@/utils/showToast';

export const useGatheringLeave = () => {
  const postGatheringLeaveApi = usePostGatheringLeaveApi();

  return async (roomId: string, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await postGatheringLeaveApi(roomId);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};

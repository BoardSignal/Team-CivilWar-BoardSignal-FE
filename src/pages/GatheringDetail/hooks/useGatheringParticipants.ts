import { usePostGatheringParticipantsApi } from '@/apis/gatheringParticipation';
import { showErrorToast } from '@/utils/showToast';

export const useGatheringParticipants = () => {
  const postGatheringParticipantsApi = usePostGatheringParticipantsApi();

  return async (roomId: string, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } =
      await postGatheringParticipantsApi(roomId);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};

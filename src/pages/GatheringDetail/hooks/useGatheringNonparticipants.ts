import { usePostGatheringNonparticipantsApi } from '@/apis/gatheringNonparticipant';
import { showErrorToast } from '@/utils/showToast';

export const useGatheringNonparticipants = () => {
  const postGatheringNonparticipantsApi = usePostGatheringNonparticipantsApi();

  return async (roomId: string, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } =
      await postGatheringNonparticipantsApi(roomId);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};

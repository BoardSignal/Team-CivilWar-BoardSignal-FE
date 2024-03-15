import { useKickParticipantsApi } from '@/apis/kickParticipants';
import { showErrorToast } from '@/utils/showToast';

export const useKickParticipants = (gatheringId: number) => {
  const kickParticipantsApi = useKickParticipantsApi(gatheringId);

  return async (userId: number, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await kickParticipantsApi(userId);
    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};

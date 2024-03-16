import { useKickParticipantApi } from '@/apis/kickParticipant';
import { showErrorToast } from '@/utils/showToast';

export const useKickParticipant = (gatheringId: number) => {
  const kickParticipantApi = useKickParticipantApi(gatheringId);

  return async (userId: number, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await kickParticipantApi(userId);
    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};

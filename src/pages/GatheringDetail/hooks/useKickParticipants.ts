import { useKickParticipantsApi } from '@/apis/kickParticipants';
import { showErrorToast } from '@/utils/showToast';

export const useKickParticipants = (gatheringId: string) => {
  const kickParticipantsApi = useKickParticipantsApi(gatheringId);

  return async (userId: string, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await kickParticipantsApi(userId);
    kickParticipantsApi;
    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};

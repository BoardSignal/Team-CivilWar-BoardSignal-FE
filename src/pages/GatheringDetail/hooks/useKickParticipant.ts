import { useKickParticipantApi } from '@/apis/kickParticipant';
import { showErrorToast } from '@/utils/showToast';

export const useKickParticipant = (gatheringId: number) => {
  const postKickParticipantApi = useKickParticipantApi(gatheringId);

  return async (userId: number, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await postKickParticipantApi(userId);
    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      onOpenModal();
    }
  };
};

import { usePostGatheringEntranceApi } from '@/apis/gatheringEntrance';
import { CHAT_IN_GATHERING_ALERT_MESSAGE } from '@/constants/messages/alert';
import useSendChatMessage from '@/hooks/useSendChatMessage';
import { showErrorToast } from '@/utils/showToast';

export const useGatheringEntrance = (roomId: string) => {
  const postGatheringEntranceApi = usePostGatheringEntranceApi();
  const { sendMessage } = useSendChatMessage({
    gatheringId: parseInt(roomId, 10),
  });

  return async (onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await postGatheringEntranceApi(roomId);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      sendMessage({
        content: CHAT_IN_GATHERING_ALERT_MESSAGE,
        type: 'PARTICIPANT',
      });
      onOpenModal();
    }
  };
};

import { usePostGatheringLeaveApi } from '@/apis/gatheringLeave';
import { CHAT_OUT_GATHERING_ALERT_MESSAGE } from '@/constants/messages/alert';
import useSendChatMessage from '@/hooks/useSendChatMessage';
import { showErrorToast } from '@/utils/showToast';

export const useGatheringLeave = (roomId: string) => {
  const postGatheringLeaveApi = usePostGatheringLeaveApi();
  const { sendMessage } = useSendChatMessage(parseInt(roomId, 10));

  return async (onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await postGatheringLeaveApi(roomId);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      sendMessage({
        content: CHAT_OUT_GATHERING_ALERT_MESSAGE,
        type: 'EXIT',
      });
      onOpenModal();
    }
  };
};

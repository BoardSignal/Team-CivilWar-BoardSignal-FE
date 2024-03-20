import { useKickParticipantApi } from '@/apis/kickParticipant';
import { CHAT_KICK_USER_ALERT_MESSAGE } from '@/constants/messages/alert';
import useSendChatMessage from '@/hooks/useSendChatMessage';
import { showErrorToast } from '@/utils/showToast';

export const useKickParticipant = (gatheringId: number) => {
  const postKickParticipantApi = useKickParticipantApi(gatheringId);
  const { sendMessage } = useSendChatMessage(gatheringId);

  return async (userId: number, onOpenModal: () => void) => {
    const { data, isOk, isBadRequest } = await postKickParticipantApi(userId);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    if (isOk) {
      sendMessage({
        content: `${data.kickOutUserNickname}${CHAT_KICK_USER_ALERT_MESSAGE}`,
        type: 'KICK',
      });
      onOpenModal();
    }
  };
};

import { useDeleteGatheringUnfixApi } from '@/apis/gatheringUnfix';
import { CHAT_UNFIX_GATHERING_ALERT_MESSAGE } from '@/constants/messages/alert';
import useSendChatMessage from '@/hooks/useSendChatMessage';
import { showErrorToast } from '@/utils/showToast';

import type { OnGatheringUnfix } from '../components/GatheringUnfixForm';

const useGatheringUnfix = (onUnfix: OnGatheringUnfix, gatheringId: string) => {
  const gatheringUnfixApi = useDeleteGatheringUnfixApi(gatheringId);
  const { sendMessage } = useSendChatMessage(parseInt(gatheringId, 10));

  return async (reason: string) => {
    const { data, isBadRequest } = await gatheringUnfixApi({
      reason,
      gatheringId,
    });

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    sendMessage({
      content: `${CHAT_UNFIX_GATHERING_ALERT_MESSAGE} (취소 사유: ${reason})`,
      type: 'UNFIX',
    });
    onUnfix();
  };
};

export default useGatheringUnfix;

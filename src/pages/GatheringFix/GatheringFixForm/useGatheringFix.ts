import {
  GatheringFixRequest,
  usePostGatheringFix,
} from '@/apis/postGatheringFix';
import { CHAT_FIX_GATHERING_ALERT_MESSAGE } from '@/constants/messages/alert';
import useSendChatMessage from '@/hooks/useSendChatMessage';
import { showErrorToast } from '@/utils/showToast';
import { formatToDateTime } from '@/utils/time';

type OnGatheringFix = () => void;

const useCreateGathering = (onCreate: OnGatheringFix, gatheringId: string) => {
  const gatheringCreateApi = usePostGatheringFix();
  const { sendMessage } = useSendChatMessage(parseInt(gatheringId, 10));

  return async (request: GatheringFixRequest) => {
    const { data, isBadRequest } = await gatheringCreateApi({
      roomId: gatheringId,
      gatheringFix: request,
    });

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    const { meetingTime, meetingPlace } = request;

    sendMessage({
      content: `${formatToDateTime(meetingTime)} ${meetingPlace}(으)로 ${CHAT_FIX_GATHERING_ALERT_MESSAGE}`,
      type: 'FIX',
    });

    onCreate();
  };
};

export default useCreateGathering;

import {
  GatheringFixRequest,
  usePostGatheringFix,
} from '@/apis/postGatheringFix';
import { showErrorToast } from '@/utils/showToast';

type OnGatheringFix = () => void;

const useCreateGathering = (onCreate: OnGatheringFix, gatheringId: string) => {
  const gatheringCreateApi = usePostGatheringFix();

  return async (request: GatheringFixRequest) => {
    const { data, isBadRequest } = await gatheringCreateApi({
      roomId: gatheringId,
      gatheringFix: request,
    });

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    onCreate();
  };
};

export default useCreateGathering;

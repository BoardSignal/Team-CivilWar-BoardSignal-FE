import {
  type GatheringCreateRequest,
  usePostGatheringCreateApi,
} from '@/apis/gatheringCreate';
import { showErrorToast } from '@/utils/showToast';

import { OnGatheringCreate } from '.';

const useCreateGathering = (onCreate: OnGatheringCreate) => {
  const gatheringCreateApi = usePostGatheringCreateApi();

  return async (request: GatheringCreateRequest) => {
    const { data, isBadRequest } = await gatheringCreateApi(request);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    onCreate(data.roomId);
  };
};

export default useCreateGathering;

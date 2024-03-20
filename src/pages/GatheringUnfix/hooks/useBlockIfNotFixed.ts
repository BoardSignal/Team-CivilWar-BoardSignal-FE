import { useEffect } from 'react';

import { useGetGatheringDetailApi } from '@/apis/gatheringDetail';
import InvalidStatePageError from '@/components/ErrorAlertFullScreen/NotFoundErrorAlertFullScreen/InvalidStatePageError';

const useBlockIfNotFixed = (gatheringId: string) => {
  const {
    gathering: { isFix },
  } = useGetGatheringDetailApi(gatheringId);

  useEffect(() => {
    if (isFix === '미확정') {
      throw new InvalidStatePageError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useBlockIfNotFixed;

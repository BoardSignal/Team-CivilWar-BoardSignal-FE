import { useEffect } from 'react';

import { useGetGatheringDetailApi } from '@/apis/gatheringDetail';
import InvalidStatePageError from '@/components/ErrorAlertFullScreen/NotFoundErrorAlertFullScreen/InvalidStatePageError';
import useGetLoggedInUserId from '@/hooks/useGetLoggedInUserId';

const useBlockNonParticipant = (gatheringId: string) => {
  const currentUserId = useGetLoggedInUserId();
  const {
    gathering: { participantResponse: participants },
  } = useGetGatheringDetailApi(gatheringId);

  useEffect(() => {
    const isParticipant = participants.some(
      ({ userId }) => currentUserId === userId,
    );

    if (!isParticipant) {
      throw new InvalidStatePageError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useBlockNonParticipant;

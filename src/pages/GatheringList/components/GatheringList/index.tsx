import { useGetGatheringListApi } from '@/apis/gatheringList';
import EmptyListFullScreen from '@/components/EmptyListFullScreen';
import GatheringListItem from '@/components/GatheringListItem';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import SpinnerListBottom from '@/components/Spinner/SpinnerListBottom';
import {
  EMPTY_GATHERING_LIST_MESSAGE,
  EMPTY_GATHERING_LIST_TITLE,
} from '@/constants/messages/emptyScreens';

import { useGatheringListQueryParams } from '../../hooks/useGatheringListQueryParams';

const GatheringList = () => {
  const options = useGatheringListQueryParams();

  const { gatherings, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetGatheringListApi(options);

  if (gatherings.length === 0) {
    return (
      <EmptyListFullScreen
        title={EMPTY_GATHERING_LIST_TITLE}
        message={EMPTY_GATHERING_LIST_MESSAGE}
      />
    );
  }

  return (
    <InfiniteScrollAutoFetcher
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      fetchStatus={isFetchingNextPage ? 'fetching' : 'idle'}
      loaderElement={<SpinnerListBottom />}
    >
      <ul>
        {gatherings.map(gathering => (
          <li key={gathering.id}>
            <GatheringListItem gathering={gathering} />
          </li>
        ))}
      </ul>
    </InfiniteScrollAutoFetcher>
  );
};

export default GatheringList;

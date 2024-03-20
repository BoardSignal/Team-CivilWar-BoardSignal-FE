import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import {
  GetGatheringListParams,
  useGetGatheringListApi,
} from '@/apis/gatheringList';
import EmptyListFullScreen from '@/components/EmptyListFullScreen';
import GatheringListItem from '@/components/GatheringListItem';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import SpinnerListBottom from '@/components/Spinner/SpinnerListBottom';
import {
  EMPTY_FILTERED_GATHERING_LIST_TITLE,
  EMPTY_GATHERING_LIST_MESSAGE,
  EMPTY_GATHERING_LIST_TITLE,
} from '@/constants/messages/emptyScreens';

import { OPTIONS } from '../..';

type GatheringListParams = Omit<GetGatheringListParams, 'size'>;

const NUMBER_OF_GETTING_GATHERINGS = 10;

const GatheringList = () => {
  const [searchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState<GatheringListParams>({
    station: [],
    time: [],
    category: [],
  });

  const { gatherings, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetGatheringListApi({
      size: NUMBER_OF_GETTING_GATHERINGS,
      ...queryParams,
    });

  const updateQueryParams = () => {
    const [station, time, category, gender] = OPTIONS.map(
      ({ queryStringKey }) => {
        if (queryStringKey === 'time') {
          return searchParams
            .getAll(queryStringKey)
            .map(param => param.replace(' ', '_'));
        }

        return searchParams.getAll(queryStringKey);
      },
    );

    setQueryParams({
      station,
      time,
      category,
      ...(gender.length !== 0 && { gender: gender[0] }),
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateQueryParams(), [searchParams]);

  if (gatherings.length === 0) {
    if (!searchParams.toString()) {
      return (
        <EmptyListFullScreen
          title={EMPTY_GATHERING_LIST_TITLE}
          message={EMPTY_GATHERING_LIST_MESSAGE}
        />
      );
    }

    return (
      <EmptyListFullScreen
        title={EMPTY_FILTERED_GATHERING_LIST_TITLE}
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
      className='grow overflow-y-auto overflow-x-hidden'
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

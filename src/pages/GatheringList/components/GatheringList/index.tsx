import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import {
  GetGatheringListParams,
  useGetGatheringListApi,
} from '@/apis/getGatheringList';
import GatheringListItem from '@/components/GatheringListItem';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import SpinnerListBottom from '@/components/Spinner/SpinnerListBottom';

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

  const {
    data: { roomsInfos: gatherings },
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetGatheringListApi({
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

  return (
    <InfiniteScrollAutoFetcher
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      fetchStatus={isFetchingNextPage ? 'fetching' : 'idle'}
      loaderElement={<SpinnerListBottom />}
      className='grow overflow-y-auto'
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

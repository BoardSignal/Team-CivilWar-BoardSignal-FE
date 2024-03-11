import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import {
  type GetGatheringListParams,
  useGetGatheringListApi,
} from '@/apis/getGatheringList';
import tabBarLogo from '@/assets/tab-bar-logo.png';
import { GNB } from '@/components/GNB';
import GatheringList from '@/components/GatheringList';
import OptionFilterBar from '@/components/OptionFilterBar';
import TabBar from '@/components/TabBar';
import { OPTIONS } from '@/constants/options';

import FloatingButton from './components/FloatingButton';

export const GatheringListPage = () => {
  const [searchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState<GetGatheringListParams>({
    size: 10,
    station: [],
    time: [],
    category: [],
    gender: '혼성',
  });

  const { roomsInfos: gatherings } = useGetGatheringListApi(queryParams);

  useEffect(() => {
    const [station, time, category, gender] = OPTIONS.map(
      ({ queryStringKey }) => {
        if (queryStringKey === 'station' || queryStringKey === 'time') {
          return searchParams
            .getAll(queryStringKey)
            .map(param => param.replace(' ', '_'));
        }

        return searchParams.getAll(queryStringKey);
      },
    );

    setQueryParams({
      size: 10,
      station,
      time,
      category,
      gender: gender.length === 1 ? gender[0] : '혼성',
    });
  }, [searchParams]);

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <img src={tabBarLogo} alt='보드시그널' className='h-[30px]' />
        </TabBar.Left>
      </TabBar.Container>
      <OptionFilterBar options={OPTIONS} />
      <GatheringList gatherings={gatherings} />
      <FloatingButton />
      <GNB />
    </div>
  );
};

export default GatheringListPage;

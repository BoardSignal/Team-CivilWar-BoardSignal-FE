import { Suspense } from 'react';

import { GNB } from '@/components/GNB';
import SpinnerFullScreen from '@/components/Spinner/SpinnerFullScreen';
import TabBar from '@/components/TabBar';

import BoardGameList from './components/BoardGameList';
import BoardGameListOptionFilterBar from './components/BoardGameListOptionFilterBar';

export const BoardGameListPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.Title>게임 정보</TabBar.Title>
        </TabBar.Left>
        <TabBar.Right>
          <TabBar.SearchButton />
        </TabBar.Right>
      </TabBar.Container>
      <BoardGameListOptionFilterBar />
      <div className='grow overflow-y-auto'>
        <Suspense fallback={<SpinnerFullScreen />}>
          <BoardGameList />
        </Suspense>
      </div>
      <GNB />
    </div>
  );
};

export default BoardGameListPage;

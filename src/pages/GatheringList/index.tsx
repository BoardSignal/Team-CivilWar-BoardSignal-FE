import tabBarLogo from '@/assets/tab-bar-logo.png';
import { GNB } from '@/components/GNB';
import TabBar from '@/components/TabBar';
import { GATHERING_SEARCH_PLACEHOLDER_MESSAGE } from '@/constants/messages/placeholder';
import useInitializeFCM from '@/hooks/useInitializeFCM';

import FloatingButton from './components/FloatingButton';
import GatheringList from './components/GatheringList';
import GatheringListOptionFilterBar from './components/GatheringListOptionFilterBar';

export const GatheringListPage = () => {
  useInitializeFCM();

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <img src={tabBarLogo} alt='보드시그널' className='h-[30px]' />
        </TabBar.Left>
        <TabBar.Right>
          <TabBar.Search placeholder={GATHERING_SEARCH_PLACEHOLDER_MESSAGE} />
        </TabBar.Right>
      </TabBar.Container>
      <GatheringListOptionFilterBar />
      <GatheringList />
      <FloatingButton />
      <GNB />
    </div>
  );
};

export default GatheringListPage;

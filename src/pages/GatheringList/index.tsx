import tabBarLogo from '@/assets/tab-bar-logo.png';
import { GNB } from '@/components/GNB';
import OptionFilterBar from '@/components/OptionFilterBar';
import TabBar from '@/components/TabBar';
import { OPTIONS } from '@/constants/options';

import FloatingButton from './components/FloatingButton';
import GatheringList from './components/GatheringList';

export const GatheringListPage = () => {
  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <img src={tabBarLogo} alt='보드시그널' className='h-[30px]' />
        </TabBar.Left>
      </TabBar.Container>
      <OptionFilterBar options={OPTIONS} />
      <GatheringList />
      <FloatingButton />
      <GNB />
    </div>
  );
};

export default GatheringListPage;

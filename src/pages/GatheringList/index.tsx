import tabBarLogo from '@/assets/tab-bar-logo.png';
import { GNB } from '@/components/GNB';
import OptionFilterBar from '@/components/OptionFilterBar';
import TabBar from '@/components/TabBar';
import { BOARDGAME_CATEGORIES, TIME_OPTIONS } from '@/constants/options';
import useInitializeFCM from '@/hooks/useInitializeFCM';

import FloatingButton from './components/FloatingButton';
import GatheringList from './components/GatheringList';

// eslint-disable-next-line react-refresh/only-export-components
export const OPTIONS = [
  {
    name: '지역',
    icon: 'subway',
    items: [],
    queryStringKey: 'station',
    selectLimit: 3,
  },
  {
    name: '시간',
    icon: 'time',
    items: TIME_OPTIONS,
    queryStringKey: 'time',
  },
  {
    name: '카테고리',
    icon: 'gamepad',
    items: BOARDGAME_CATEGORIES,
    queryStringKey: 'category',
  },
  {
    name: '성별',
    icon: 'team',
    items: ['남성', '여성'],
    queryStringKey: 'gender',
    selectLimit: 1,
  },
];

export const GatheringListPage = () => {
  useInitializeFCM();

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

import OptionFilterBar from '@/components/OptionFilterBar';
import { BOARDGAME_CATEGORIES, TIME_OPTIONS } from '@/constants/options';

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

const GatheringListOptionFilterBar = () => (
  <OptionFilterBar options={OPTIONS} />
);

export default GatheringListOptionFilterBar;

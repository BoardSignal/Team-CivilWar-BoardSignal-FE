import OptionFilterBar from '@/components/OptionFilterBar';
import {
  BOARDGAME_CATEGORIES,
  DIFFICULTY_CATEGORIES,
} from '@/constants/options';
import { BOARD_GAMES_PAGE_URL } from '@/constants/pageRoutes';

const OPTIONS = [
  {
    name: '난이도',
    icon: 'bar-chart',
    items: DIFFICULTY_CATEGORIES,
    queryStringKey: 'difficulty',
    selectLimit: 1,
  },
  {
    name: '시간',
    icon: 'time',
    // TODO: 임의의 시간 값들을 만들어놓았어요.
    items: [15, 30, 45, 60, 80, 100, 120].map(String),
    // FIXME: option의 value와 text의 분리를 할 수가 없어요.
    // FIXME: 범위 중간에 속하면 결과에 포함되는데..뭔가 이상한 것 같아요.
    // --> Range로 선택하면 좋을 것 같아요.
    // .map(
    //   min => `${min}분`,
    // ),
    queryStringKey: 'playTime',
    selectLimit: 1,
  },
  {
    name: '카테고리',
    icon: 'gamepad',
    items: BOARDGAME_CATEGORIES,
    queryStringKey: 'categories',
    selectLimit: 3,
  },
  // FIXME: API 명세에 인원 수가 없는 것 같아요.
  // --> 인원 수도 Range로 선택하면 좋을 것 같아요.
];

const BoardGameListOptionFilterBar = () => (
  <OptionFilterBar options={OPTIONS} resetUrl={BOARD_GAMES_PAGE_URL} />
);

export default BoardGameListOptionFilterBar;

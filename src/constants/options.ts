export const TIMES = ['평일 오전', '평일 오후', '주말 오전', '주말 오후'];

export const BOARDGAME_CATEGORIES = [
  '워게임',
  '가족게임',
  '전략게임',
  '추상게임',
  '테마게임',
  '파티게임',
  '어린이게임',
  '컬렉터블게임',
];

export const OPTIONS = [
  {
    name: '지역',
    icon: 'map-pin',
    items: ['강남역', '합정역', '신당역'],
    queryStringKey: 'station',
  },
  {
    name: '시간',
    icon: 'time',
    items: TIMES,
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
  },
];

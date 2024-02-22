import TabBar from '@/components/TabBar';

import Description from './components/Description';
import Info from './components/Info';

const DummyData = {
  name: '스플렌더',
  imageUrl: 'https://picsum.photos/200/200',
  wishCount: 15,
  minParticipants: 2,
  maxParticipants: 4,
  fromPlayTime: 30,
  toPlayTime: 60,
  difficulty: '보통',
  categories: ['전략', '카드'],
  description:
    '스플렌더는 칩 수집 및 카드 개발 게임입니다. 플레이어는 르네상스 시대의 상인이 되어 보석 광산, 운송 수단, 상점 등을 구매하고 명성 포인트를 많이 획득해야 합니다. 충분히 부유하다면 귀족의 방문을 받을 수도 있으며, 이 경우 명성이 더욱 높아질 것입니다.',
};

const BoardGameDetailPage = () => {
  const {
    name,
    imageUrl,
    wishCount,
    minParticipants,
    maxParticipants,
    fromPlayTime,
    toPlayTime,
    difficulty,
    categories,
    description,
  } = DummyData;

  return (
    <div className='flex h-full flex-col'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <TabBar.Title>{name}</TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <Info
        name={name}
        imageUrl={imageUrl}
        wishCount={wishCount}
        minParticipants={minParticipants}
        maxParticipants={maxParticipants}
        fromPlayTime={fromPlayTime}
        toPlayTime={toPlayTime}
        difficulty={difficulty}
        categories={categories}
      />
      <Description description={description} />
    </div>
  );
};

export default BoardGameDetailPage;

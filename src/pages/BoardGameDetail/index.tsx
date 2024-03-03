import TabBar from '@/components/TabBar';

import GameDescription from './components/GameDescription';
import GamePlayDetail from './components/GamePlayDetail';
import GameSummary from './components/GameSummary';
import GameWish from './components/GameWish';

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

  const boardGameImageUrl = imageUrl || 'https://picsum.photos/200/200';

  return (
    <div className='flex h-full flex-col justify-center'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <TabBar.Title>{name}</TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <img src={boardGameImageUrl} className='h-60' alt={name} />
      <div className='flex flex-col items-center gap-3 border-b border-gray-accent7 py-5'>
        <GameSummary name={name} categories={categories} />
        <GamePlayDetail
          gamePlayDetail={{
            difficulty,
            minParticipants,
            maxParticipants,
            fromPlayTime,
            toPlayTime,
          }}
        />
        <GameWish wishCount={wishCount} />
      </div>
      <GameDescription description={description} />
    </div>
  );
};

export default BoardGameDetailPage;

import TabBar from '@/components/TabBar';

import BoardGameTip from './components/BoardGameTips';
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
  tips: [
    {
      tipId: 1,
      nickname: 'injuniing',
      profileImageUrl: '',
      createdAt: '2024-01-31 14:30',
      content: '개꿀팁 갑니다',
      likeCount: 3,
    },
    {
      tipId: 2,
      nickname: 'injuniing',
      profileImageUrl: '',
      createdAt: '2024-02-23 10:30',
      content: `
        개꿀팁 갑니다zㅋㅋㅋㅋ 
        개꿀팁 갑니다 개꿀팁 갑니다 
        개꿀팁 갑니다 ㅋㅋㅋ 
        개꿀팁 갑니다 
        개꿀팁 갑니다`,
      likeCount: 3,
    },
    {
      tipId: 2,
      nickname: 'Hober',
      profileImageUrl: '',
      createdAt: '2023-02-23 10:30',
      content: `
        적은 인원일 땐 귀족 카드 노리세요. 
        적은 인원일 땐 귀족 카드 노리세요. 
        적은 인원일 땐 귀족 카드 노리세요. 
        적은 인원일 땐 귀족 카드 노리세요. 
        적은 인원일 땐 귀족 카드 노리세요. 
        적은 인원일 땐 귀족 카드 노리세요. 
        `,
      likeCount: 10,
    },
  ],
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
    tips,
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
      <div className='flex flex-col overflow-y-auto'>
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
        <BoardGameTip tips={tips} />
      </div>
    </div>
  );
};

export default BoardGameDetailPage;

import { useParams } from 'react-router-dom';

import { useGetBoardGameDetailApi } from '@/apis/boardGameDetail';
import TabBar from '@/components/TabBar';

import BoardGameTipList from './components/BoardGameTipList';
import GameDescription from './components/GameDescription';
import GamePlayDetail from './components/GamePlayDetail';
import GameSummary from './components/GameSummary';
import GameWish from './components/GameWish';

const BoardGameDetailPage = () => {
  const { boardGameId } = useParams();

  if (!boardGameId) {
    throw new Error('boardGameId is required');
  }

  const {
    data: boardGameDetail,
    isPending,
    isError,
  } = useGetBoardGameDetailApi({ boardGameId });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) throw new Error('Failed to load board game detail');

  const {
    name,
    description,
    categories,
    wishCount,
    imageUrl,
    isWished,
    myTip,
    tips,
    ...gamePlayDetail
  } = boardGameDetail;

  return (
    <div className='flex h-full flex-col justify-center'>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
          <TabBar.Title>{name}</TabBar.Title>
        </TabBar.Left>
      </TabBar.Container>
      <div className='flex h-full grow flex-col overflow-y-auto'>
        <img src={imageUrl} className='h-60' alt={name} />
        <div className='flex flex-col items-center gap-3 border-b border-gray-accent7 py-5'>
          <GameSummary name={name} categories={categories} />
          <GamePlayDetail gamePlayDetail={gamePlayDetail} />
          <GameWish wishCount={wishCount} isWished={isWished} />
        </div>
        <GameDescription description={description} />
        <BoardGameTipList
          tips={tips}
          name={name}
          boardGameId={boardGameId}
          myTip={myTip}
        />
      </div>
    </div>
  );
};

export default BoardGameDetailPage;

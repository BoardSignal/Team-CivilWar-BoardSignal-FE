import { useParams } from 'react-router-dom';

import { useGetBoardGameDetailApi } from '@/apis/boardGameDetail';
import { BoardGameDetailResponse } from '@/apis/boardGameDetail';
import TabBar from '@/components/TabBar';

import BoardGameTip from './components/BoardGameTips';
import GameDescription from './components/GameDescription';
import GamePlayDetail from './components/GamePlayDetail';
import GameSummary from './components/GameSummary';
import GameWish from './components/GameWish';

const BoardGameDetailPage = () => {
  const { boardGameId } = useParams() as { boardGameId: string };
  const {
    data: boardGameDetail,
    isPending,
    isError,
  } = useGetBoardGameDetailApi(boardGameId);

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) return <div>Error</div>;

  const {
    name,
    description,
    categories,
    difficulty,
    minParticipants,
    maxParticipants,
    fromPlayTime,
    toPlayTime,
    wishCount,
    imageUrl,
    isWished,
    myTip,
    tips,
  } = boardGameDetail as BoardGameDetailResponse;

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
          <GamePlayDetail
            gamePlayDetail={{
              difficulty,
              minParticipants,
              maxParticipants,
              fromPlayTime,
              toPlayTime,
            }}
          />
          <GameWish wishCount={wishCount} isWished={isWished} />
        </div>
        <GameDescription description={description} />
        <BoardGameTip
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

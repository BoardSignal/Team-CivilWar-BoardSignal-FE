import { useParams } from 'react-router-dom';

import { useGetBoardGameWishListApi } from '@/apis/boardGameWishList';
import EmptyListFullScreen from '@/components/EmptyListFullScreen';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import {
  EMPTY_BOARD_GAME_WISH_MESSAGE,
  EMPTY_BOARD_GAME_WISH_TITLE,
} from '@/constants/messages/emptyScreens';
import BoardGameListItem from '@/pages/BoardGameList/components/BoardGameList/BoardGameListItem';

const BoardGameWishList = () => {
  const { userId } = useParams() as { userId: string };
  const { boardGamesInfos, fetchStatus, hasNextPage, fetchNextPage } =
    useGetBoardGameWishListApi(userId);

  if (boardGamesInfos.length === 0) {
    return (
      <EmptyListFullScreen
        title={EMPTY_BOARD_GAME_WISH_TITLE}
        message={EMPTY_BOARD_GAME_WISH_MESSAGE}
      />
    );
  }

  return (
    <InfiniteScrollAutoFetcher
      hasNextPage={hasNextPage}
      fetchStatus={fetchStatus}
      fetchNextPage={fetchNextPage}
      className='grow overflow-y-auto overflow-x-hidden'
    >
      {boardGamesInfos.map(boardGame => (
        <BoardGameListItem key={boardGame.boardGameId} boardGame={boardGame} />
      ))}
    </InfiniteScrollAutoFetcher>
  );
};

export default BoardGameWishList;

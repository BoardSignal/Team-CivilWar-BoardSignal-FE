import { useGetBoardGameListApi } from '@/apis/boardGameList';
import EmptyListFullScreen from '@/components/EmptyListFullScreen';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import {
  EMPTY_BOARD_GAMES_MESSAGE,
  EMPTY_BOARD_GAMES_TITLE,
} from '@/constants/messages/emptyScreens';

import { useBoardGameListQueryParams } from '../../hooks/useBoardGameListQueryParams';
import BoardGameListItem from './BoardGameListItem';

const BoardGameList = () => {
  const options = useBoardGameListQueryParams();

  const { boardGamesInfos, fetchStatus, hasNextPage, fetchNextPage } =
    useGetBoardGameListApi(options);

  if (boardGamesInfos.length === 0) {
    return (
      <EmptyListFullScreen
        title={EMPTY_BOARD_GAMES_TITLE}
        message={EMPTY_BOARD_GAMES_MESSAGE}
      />
    );
  }

  return (
    <InfiniteScrollAutoFetcher
      fetchStatus={fetchStatus}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      className='flex flex-col'
    >
      {boardGamesInfos.map(boardGame => (
        <BoardGameListItem key={boardGame.boardGameId} boardGame={boardGame} />
      ))}
    </InfiniteScrollAutoFetcher>
  );
};

export default BoardGameList;

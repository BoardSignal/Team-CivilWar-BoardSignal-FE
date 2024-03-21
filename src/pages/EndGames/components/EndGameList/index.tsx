import { useGetEndGameListApi } from '@/apis/endGameList';
import EmptyListFullScreen from '@/components/EmptyListFullScreen';
import EndGameListItem from '@/components/EndGameListItem';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import SpinnerListBottom from '@/components/Spinner/SpinnerListBottom';
import {
  EMPTY_END_GAME_LIST_MESSAGE,
  EMPTY_END_GAME_LIST_TITLE,
} from '@/constants/messages/emptyScreens';

interface EndGameListProps {
  userId: number;
}

const EndGameList = ({ userId }: EndGameListProps) => {
  const { endGames, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetEndGameListApi(10, userId);

  if (endGames.length === 0) {
    return (
      <EmptyListFullScreen
        title={EMPTY_END_GAME_LIST_TITLE}
        message={EMPTY_END_GAME_LIST_MESSAGE}
      />
    );
  }

  return (
    <InfiniteScrollAutoFetcher
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      fetchStatus={isFetchingNextPage ? 'fetching' : 'idle'}
      loaderElement={<SpinnerListBottom />}
      className='grow overflow-y-auto overflow-x-hidden'
    >
      <ul>
        {endGames.map(endGame => (
          <li key={endGame.id}>
            <EndGameListItem endGame={endGame} />
          </li>
        ))}
      </ul>
    </InfiniteScrollAutoFetcher>
  );
};

export default EndGameList;

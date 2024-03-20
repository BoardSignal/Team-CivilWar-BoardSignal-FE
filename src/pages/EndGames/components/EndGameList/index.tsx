import { useGetEndGameListApi } from '@/apis/endGameList';
import EndGameListItem from '@/components/EndGameListItem';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import SpinnerListBottom from '@/components/Spinner/SpinnerListBottom';

interface EndGameListProps {
  userId: number;
}

const EndGameList = ({ userId }: EndGameListProps) => {
  const { endGames, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetEndGameListApi(10, userId);

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

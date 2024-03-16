import { Link } from 'react-router-dom';

import { useGetEndGameListApi } from '@/apis/endGameList';
import Button from '@/components/Button';
import GatheringListItem from '@/components/GatheringListItem';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import SpinnerListBottom from '@/components/Spinner/SpinnerListBottom';
import { END_GAMES_REVIEWS_CREATE_PAGE_URL } from '@/constants/pageRoutes';
import { getRemainDay } from '@/utils/time';

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
    >
      <ul>
        {endGames.map(endGame => (
          <li
            key={endGame.id}
            className='flex flex-col gap-4 border-b border-gray-accent7 p-4'
          >
            <GatheringListItem
              gathering={endGame}
              isButtonDisable
              isFullDate
              className='border-b-0 p-0'
            />
            {getRemainDay(endGame.createdAt) > 0 && (
              <Link to={END_GAMES_REVIEWS_CREATE_PAGE_URL}>
                <Button
                  variant='primary'
                  className=''
                >{`모임 리뷰하기 (${getRemainDay(endGame.createdAt)}일 남음)`}</Button>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </InfiniteScrollAutoFetcher>
  );
};

export default EndGameList;

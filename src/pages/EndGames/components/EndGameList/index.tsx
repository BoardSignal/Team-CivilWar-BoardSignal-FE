import { Link } from 'react-router-dom';

import { useGetEndGameListApi } from '@/apis/endGameList';
import Button from '@/components/Button';
import GatheringListItem from '@/components/GatheringListItem';
import InfiniteScrollAutoFetcher from '@/components/InfiniteScrollAutoFetcher';
import SpinnerListBottom from '@/components/Spinner/SpinnerListBottom';
import { REVIEW_PERIOD } from '@/constants/boardSignal';
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
      className='grow overflow-y-auto overflow-x-hidden'
    >
      <ul>
        {endGames.map(endGame => {
          const remainingReviewableDay =
            REVIEW_PERIOD - getRemainDay(endGame.fixTime);

          return (
            <li
              key={endGame.id}
              className='flex flex-col gap-4 border-b border-gray-accent7 p-4'
            >
              <GatheringListItem
                gathering={endGame}
                isButtonDisabled
                isFullDate
                className='border-b-0 p-0'
              />
              {remainingReviewableDay > 0 && (
                <Link to={END_GAMES_REVIEWS_CREATE_PAGE_URL}>
                  <Button variant='primary'>{`모임 리뷰하기 (${remainingReviewableDay}일 남음)`}</Button>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </InfiniteScrollAutoFetcher>
  );
};

export default EndGameList;

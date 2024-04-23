import { Link } from 'react-router-dom';

import type { EndGameResponse } from '@/apis/endGameList';
import defaultThumbnailImage from '@/assets/default-thumbnail-image.png';
import { REVIEW_PERIOD } from '@/constants/boardSignal';
import { END_GAMES_REVIEWS_CREATE_PAGE_URL } from '@/constants/pageRoutes';
import { formatToDateTime, getRemainDay } from '@/utils/time';

import Button from '../Button';
import Icon from '../Icon';

interface EndGameDetail
  extends Omit<
    EndGameResponse,
    'description' | 'time' | 'reviewCompleted' | 'station' | 'fixLine'
  > {
  reviewCompleted?: boolean;
}

interface EndGameListItemProps {
  endGame: EndGameDetail;
}

const EndGameListItem = ({ endGame }: EndGameListItemProps) => {
  const {
    id,
    imageUrl,
    title,
    minAge,
    maxAge,
    allowedGender,
    headCount,
    fixTime,
    fixStation,
    fixPlace,
    reviewCompleted: isReviewCompleted,
  } = endGame;

  const ageRange = minAge === maxAge ? minAge : `${minAge}~${maxAge}`;
  const gatheringSummary = [`${ageRange}세`, allowedGender].join(' · ');
  const gatheringFixPlace = `${fixPlace}(${fixStation})`;
  const remainingReviewableDay = REVIEW_PERIOD - getRemainDay(fixTime);

  return (
    <div className='flex h-fit flex-col gap-4 border-b border-gray-accent7 p-4'>
      <div className='flex gap-4'>
        <img
          src={imageUrl ?? defaultThumbnailImage}
          alt={title}
          className='size-[100px] shrink-0 rounded-lg object-cover'
        />
        <div className='flex h-[100px] grow flex-col justify-between text-xs'>
          <div className='flex flex-col items-start gap-1'>
            <div className='w-full truncate text-left text-base'>{title}</div>
            <div className='text-left text-xs text-gray-accent2'>
              {gatheringSummary}
            </div>
            <div className='flex w-full justify-between'>
              {gatheringFixPlace}
            </div>
          </div>
          <div className='flex justify-between text-xs text-gray-accent3'>
            <div>{formatToDateTime(fixTime, 'medium')}</div>
            <div className='flex items-center gap-1'>
              <Icon id='user-line' size={12} />
              <span>{headCount}</span>
            </div>
          </div>
        </div>
      </div>
      {isReviewCompleted !== undefined &&
        remainingReviewableDay > 0 &&
        (!isReviewCompleted ? (
          <Link to={`${END_GAMES_REVIEWS_CREATE_PAGE_URL}/${id}`}>
            <Button variant='primary'>{`모임 리뷰하기 (${remainingReviewableDay}일 남음)`}</Button>
          </Link>
        ) : (
          <Button variant='inactive'>{`모임 리뷰하기 (${remainingReviewableDay}일 남음)`}</Button>
        ))}
    </div>
  );
};

export default EndGameListItem;

import { ComponentPropsWithoutRef } from 'react';

import { Link } from 'react-router-dom';

import type { Gathering } from '@/apis/gatheringList';
import defaultThumbnailImage from '@/assets/default-thumbnail-image.png';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { BOARDGAME_CATEGORIES } from '@/constants/options';
import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';
import { cn } from '@/utils/cn';
import { getRelativeTimeWithin } from '@/utils/time';

interface GatheringListItemProps extends ComponentPropsWithoutRef<'div'> {
  gathering: Gathering;
  isButtonDisabled?: boolean;
  isFullDate?: boolean;
}

const GatheringListItem = ({
  gathering,
  isButtonDisabled = false,
  isFullDate = false,
  className,
}: GatheringListItemProps) => {
  const {
    id: gatheringId,
    imageUrl,
    title,
    station,
    time,
    minAge,
    maxAge,
    allowedGender,
    minParticipants,
    maxParticipants,
    categories,
    headCount,
    createdAt,
  } = gathering;

  const ageRange = minAge === maxAge ? minAge : `${minAge}~${maxAge}`;
  const participantsRange =
    minParticipants === maxParticipants
      ? minParticipants
      : `${minParticipants}~${maxParticipants}`;
  const gatheringSummary = [
    time,
    `${ageRange}세`,
    allowedGender,
    `${participantsRange}명`,
  ].join(' · ');
  const categoriesText =
    categories.length < BOARDGAME_CATEGORIES.length
      ? categories.join(' · ')
      : '';
  const timeText = isFullDate
    ? getRelativeTimeWithin(createdAt, 0)
    : getRelativeTimeWithin(createdAt);

  return (
    <Link to={`${GATHERINGS_PAGE_URL}/${gatheringId}`}>
      <Button
        className={cn(
          'h-fit gap-4 border-b border-gray-accent7 p-4',
          className,
        )}
        disabled={isButtonDisabled}
      >
        <img
          src={imageUrl ?? defaultThumbnailImage}
          alt={title}
          className='size-[100px] shrink-0 rounded-lg object-cover'
        />
        <div className='flex h-[100px] grow flex-col justify-between overflow-x-hidden'>
          <div className='flex flex-col items-start gap-1'>
            <div className='w-full truncate text-left'>{title}</div>
            <div className='text-left text-xs text-gray-accent2'>
              {gatheringSummary}
            </div>
            <div className='flex w-full justify-between'>
              <span className='w-fit text-left text-xs text-gray-accent2'>
                {categoriesText}
              </span>
              <span className='w-[100px] truncate text-right text-xs text-gray-accent2'>
                {station}
              </span>
            </div>
          </div>
          <div className='flex justify-between text-xs text-gray-accent3'>
            <div>{timeText}</div>
            <div className='flex items-center gap-1'>
              <Icon id='user-line' size={12} />
              <span>{headCount}</span>
            </div>
          </div>
        </div>
      </Button>
    </Link>
  );
};

export default GatheringListItem;

import defaultThumbnailImage from '@/assets/default-thumbnail-image.png';
import Icon from '@/components/Icon';
import { getRelativeTime } from '@/utils/time';

import type { Gathering } from '.';

interface GatheringItemProps {
  gathering: Gathering;
}

const GatheringItem = ({ gathering }: GatheringItemProps) => {
  const {
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

  const AGE_RANGE = `${minAge === maxAge ? minAge : `${minAge}~${maxAge}`}세`;
  const PARTICIPANTS_RANGE = `${minParticipants === maxParticipants ? minParticipants : `${minParticipants}~${maxParticipants}`}인`;
  const CATEGORIES_TEXT = categories.map(
    (category, index) =>
      `${category}${index !== categories.length - 1 ? ' · ' : ''}`,
  );

  return (
    <li className='flex gap-4 border-b border-gray-accent7 p-4'>
      <img
        src={imageUrl || defaultThumbnailImage}
        alt={title}
        width={100}
        height={100}
        className='rounded-lg object-cover'
      />
      <div className='flex grow flex-col justify-between overflow-x-hidden'>
        <div className='flex flex-col gap-1'>
          <div className='truncate'>{title}</div>
          <div className='text-xs text-gray-accent2'>
            {`${station} · ${time} · ${AGE_RANGE} · ${allowedGender} · ${PARTICIPANTS_RANGE}`}
          </div>
          <div className='text-xs text-gray-accent2'>{CATEGORIES_TEXT}</div>
        </div>
        <div className='flex justify-between text-xs text-gray-accent3'>
          <div>{getRelativeTime(createdAt)}</div>
          <div className='flex items-center gap-1'>
            <Icon id='user-line' size={12} />
            <span>{headCount}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GatheringItem;

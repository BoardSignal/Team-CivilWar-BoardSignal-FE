import { Link } from 'react-router-dom';

import defaultThumbnailImage from '@/assets/default-thumbnail-image.png';
import Icon from '@/components/Icon';
import { getRelativeTime } from '@/utils/time';

import type { Gathering } from '.';
import Button from '../Button';

interface GatheringItemProps {
  gathering: Gathering;
}

const GatheringItem = ({ gathering }: GatheringItemProps) => {
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
    station,
    time,
    `${ageRange}세`,
    allowedGender,
    `${participantsRange}명`,
  ].join(' · ');
  const categoriesText = categories.join(' · ');

  return (
    <li className='border-b border-gray-accent7'>
      <Link to={`/gatherings/${gatheringId}`}>
        <Button className='flex cursor-pointer gap-4 p-4'>
          <img
            src={imageUrl || defaultThumbnailImage}
            alt={title}
            className='size-[100px] rounded-lg object-cover'
          />
          <div className='flex grow flex-col justify-between overflow-x-hidden'>
            <div className='flex flex-col gap-1'>
              <div className='truncate'>{title}</div>
              <div className='text-xs text-gray-accent2'>
                {gatheringSummary}
              </div>
              <div className='text-xs text-gray-accent2'>{categoriesText}</div>
            </div>
            <div className='flex justify-between text-xs text-gray-accent3'>
              <div>{getRelativeTime(createdAt)}</div>
              <div className='flex items-center gap-1'>
                <Icon id='user-line' size={12} />
                <span>{headCount}</span>
              </div>
            </div>
          </div>
        </Button>
      </Link>
    </li>
  );
};

export default GatheringItem;

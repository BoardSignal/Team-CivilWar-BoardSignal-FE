import { useParams } from 'react-router-dom';

import type { Tip } from '@/apis/boardGameDetail';
import Icon from '@/components/Icon';
import { cn } from '@/utils/cn';
import { getRelativeTimeWithin } from '@/utils/time';

import { useBoardGameTipLike } from '../../hooks/useBoardGameTipLike';

const DEFAULT_PROFILE_IMAGE_URL = 'https://picsum.photos/200/200';

const TipItem = ({ tip }: { tip: Tip }) => {
  const {
    tipId,
    nickname,
    profileImageUrl,
    createdAt,
    content,
    likeCount,
    isLiked,
  } = tip;

  const { boardGameId } = useParams() as { boardGameId: string };

  const { postBoardGameTipLike, deleteBoardGameTipLike } = useBoardGameTipLike(
    tipId,
    boardGameId,
  );

  const toggledTipLike = () => {
    isLiked ? deleteBoardGameTipLike() : postBoardGameTipLike();
  };

  return (
    <div className='flex gap-2 border-b border-gray-accent7 p-4'>
      <img
        src={profileImageUrl || DEFAULT_PROFILE_IMAGE_URL}
        className='h-10 w-10 rounded-full object-cover'
      />
      <div className='flex w-full flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-bold text-gray-accent1'>
            {nickname}
          </span>
          <span className='text-[10px] text-gray-accent3'>
            {getRelativeTimeWithin(createdAt)}
          </span>
        </div>
        <p className='text-gray-accent1'>{content}</p>
        <div
          className='flex w-fit cursor-pointer items-center gap-1'
          onClick={toggledTipLike}
        >
          <Icon
            id={isLiked ? 'thumb-up-fill' : 'thumb-up-line'}
            size={16}
            className={cn('text-gray-accent3', isLiked && 'text-primary')}
          />
          <span className='text-xs text-gray-accent1'>{likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default TipItem;

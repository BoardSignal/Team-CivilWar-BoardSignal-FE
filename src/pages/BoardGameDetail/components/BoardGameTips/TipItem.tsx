import { useState } from 'react';

import type { Tip } from '@/apis/boardGameDetail';
import Icon from '@/components/Icon';
import { cn } from '@/utils/cn';
import { convertToRelativeTime } from '@/utils/convertToRelativeTime';

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

  const { postBoardGameTipLike, deleteBoardGameTipLike } =
    useBoardGameTipLike(tipId);

  const [isTipLiked, setIsLiked] = useState(isLiked);
  const [likedTipCount, setLikeCount] = useState(likeCount);

  const clickedTipLike = () => {
    isTipLiked ? deleteBoardGameTipLike() : postBoardGameTipLike();
    setIsLiked(!isTipLiked);
    setLikeCount(isTipLiked ? likedTipCount - 1 : likedTipCount + 1);
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
            {convertToRelativeTime(createdAt)}
          </span>
        </div>
        <p className='text-gray-accent1'>{content}</p>
        <div className='flex items-center gap-1' onClick={clickedTipLike}>
          <Icon
            id={isTipLiked ? 'thumb-up-fill' : 'thumb-up-line'}
            size={16}
            className={cn('text-gray-accent3', isTipLiked && 'text-primary')}
          />
          <span className='text-xs text-gray-accent1'>{likedTipCount}</span>
        </div>
      </div>
    </div>
  );
};

export default TipItem;

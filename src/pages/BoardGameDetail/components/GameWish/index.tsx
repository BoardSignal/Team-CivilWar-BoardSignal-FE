import { useState } from 'react';

import { useParams } from 'react-router-dom';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { cn } from '@/utils/cn';

import { useBoardGameWish } from '../../hooks/useBoardGameWish';

const GameWish = ({
  wishCount,
  isWished,
}: {
  wishCount: number;
  isWished: boolean;
}) => {
  const { boardGameId } = useParams() as { boardGameId: string };
  const [isBoardGameWished, setIsBoardGameWished] = useState(isWished);
  const [boardGameWishCount, setBoardGameWishCount] = useState(wishCount);

  const { postBoardGameWish, deleteBoardGameWish } =
    useBoardGameWish(boardGameId);

  const clickedWishButton = () => {
    isBoardGameWished ? deleteBoardGameWish() : postBoardGameWish();
    setIsBoardGameWished(!isBoardGameWished);
    isBoardGameWished
      ? setBoardGameWishCount(boardGameWishCount - 1)
      : setBoardGameWishCount(boardGameWishCount + 1);
  };

  return (
    <div className='flex flex-col items-center gap-1'>
      <Button
        onClick={clickedWishButton}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full border border-gray-accent3',
          isBoardGameWished && 'bg-primary',
        )}
      >
        <Icon
          id={isBoardGameWished ? 'bookmark-fill' : 'bookmark-line'}
          size={16}
          className={cn('text-gray-accent3', isBoardGameWished && 'text-white')}
        />
      </Button>
      <span className='text-xs text-gray-accent1'>{boardGameWishCount}</span>
    </div>
  );
};

export default GameWish;

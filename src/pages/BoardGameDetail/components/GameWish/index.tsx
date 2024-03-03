import { useState } from 'react';

import { useParams } from 'react-router-dom';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { useBoardGameWish } from '@/pages/BoardGameDetail/hooks/useBoardGameWish';
import { cn } from '@/utils/cn';

const GameWish = ({ wishCount }: { wishCount: number }) => {
  const { boardGameId } = useParams() as { boardGameId: string };
  const [isBoardGameWished, setIsBoardGameWished] = useState(false);

  const { postBoardGameWish } = useBoardGameWish(boardGameId);

  const clickedWishButton = () => {
    postBoardGameWish();
    setIsBoardGameWished(!isBoardGameWished);
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
      <span className='text-xs text-gray-accent1'>{wishCount}</span>
    </div>
  );
};

export default GameWish;

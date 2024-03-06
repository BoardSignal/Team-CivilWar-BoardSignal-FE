import { useParams } from 'react-router-dom';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { cn } from '@/utils/cn';

import { useBoardGameWish } from '../../hooks/useBoardGameWish';

interface GameWishProps {
  wishCount: number;
  isWished: boolean;
}
const GameWish = ({ wishCount, isWished }: GameWishProps) => {
  const { boardGameId = '1' } = useParams();

  /**
   * if (!boardGameId) {
   *   추후에 404페이지로 라우팅 될 예정입니다 .
   * }
   * 현재 mock 데이터가 없어서 임시로 1번 게임을 조회합니다.
   */

  const { postBoardGameWish, deleteBoardGameWish } =
    useBoardGameWish(boardGameId);

  const toggledWish = isWished ? deleteBoardGameWish : postBoardGameWish;

  return (
    <div className='flex flex-col items-center gap-1'>
      <Button
        onClick={toggledWish}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full border border-gray-accent3',
          isWished && 'bg-primary',
        )}
      >
        <Icon
          id={isWished ? 'bookmark-fill' : 'bookmark-line'}
          size={16}
          className={cn('text-gray-accent3', isWished && 'text-white')}
        />
      </Button>
      <span className='text-xs text-gray-accent1'>{wishCount}</span>
    </div>
  );
};

export default GameWish;

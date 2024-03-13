import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

interface WishGameButtonProps {
  wishGamesCount: number;
  userId: string;
}

const WishGameButton = ({ wishGamesCount, userId }: WishGameButtonProps) => (
  <Link to={`/users/wish/${userId}`}>
    <Button className='flex h-auto gap-4 border-b border-gray-accent7 p-4'>
      <div className='flex w-full justify-between'>
        <span className='flex gap-1'>
          <span className='font-bold text-gray-accent1'>찜한 게임 목록</span>
          <span className='text-gray-accent1'>{wishGamesCount}</span>
        </span>
        <Icon id='arrow-right-line' className='cursor-pointer'></Icon>
      </div>
    </Button>
  </Link>
);

export default WishGameButton;

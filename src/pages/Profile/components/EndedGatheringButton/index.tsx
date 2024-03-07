import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

interface EndedGatheringButtonProps {
  endedGame: number;
}

const EndedGatheringButton = ({ endedGame }: EndedGatheringButtonProps) => {
  return (
    <Link to='/end-games'>
      <Button className='flex h-auto gap-4 border-b border-gray-accent7 p-4'>
        <div className='flex w-full justify-between'>
          <span className='flex gap-1'>
            <span className='font-bold text-gray-accent1'>
              종료된 게임 목록
            </span>
            <span className='text-black'>{endedGame}</span>
          </span>
          <Icon id='arrow-right-line' className='cursor-pointer'></Icon>
        </div>
      </Button>
    </Link>
  );
};

export default EndedGatheringButton;

import Button from '@/components/Button';
import Icon from '@/components/Icon';

const GameWish = ({ wishCount }: { wishCount: number }) => {
  return (
    <div className='flex flex-col items-center gap-1'>
      <Button className='flex h-8 w-8 items-center justify-center rounded-full border border-gray-accent3 '>
        <Icon id='bookmark-line' size={16} className='text-gray-accent3' />
      </Button>
      <span className='text-xs text-gray-accent1'>{wishCount}</span>
    </div>
  );
};

export default GameWish;

import { Link } from 'react-router-dom';

import type { Tip } from '@/apis/boardGameDetail';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

import MyTipItem from './MyTipItem';
import TipItem from './TipItem';

interface BoardGameTipsProps {
  tips: Tip[];
  name: string;
  boardGameId: string;
  myTip: Tip | null;
}

const BoardGameTips = ({
  tips,
  name,
  boardGameId,
  myTip,
}: BoardGameTipsProps) => {
  return (
    <>
      {!myTip ? (
        <div className='flex items-center justify-between p-4'>
          <span className='font-bold'>공략</span>
          <Link to={`board-games/${boardGameId}/${name}/tip/create`}>
            <Button className='flex w-fit items-center gap-0.5 rounded-3xl bg-primary p-3 pl-2 text-white'>
              <Icon id='add-line' size={16} />
              <span className='text-xs font-bold'>작성하기</span>
            </Button>
          </Link>
        </div>
      ) : (
        <MyTipItem tip={myTip} />
      )}
      {tips.map(tip => (
        <TipItem tip={tip} key={tip.tipId} />
      ))}
    </>
  );
};

export default BoardGameTips;

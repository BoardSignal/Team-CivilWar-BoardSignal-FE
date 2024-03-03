import { Link } from 'react-router-dom';

import type { MyTip, Tip } from '@/apis/boardGameDetail';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { convertToRelativeTime } from '@/utils/convertToRelativeTime';

interface BoardGameTipsProps {
  tips: Tip[];
  name: string;
  boardGameId: string;
  myTip: MyTip;
}

const DEFAULT_PROFILE_IMAGE_URL = 'https://picsum.photos/200/200';

const Tip = ({ tip }: { tip: Tip }) => {
  const { nickname, profileImageUrl, createdAt, content, likeCount } = tip;

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
        <div className='flex items-center gap-1'>
          <Icon id='thumb-up-line' size={16} className='text-gray-accent3' />
          <span className='text-xs text-gray-accent1'>{likeCount}</span>
        </div>
      </div>
    </div>
  );
};

const BoardGameTips = ({
  tips,
  name,
  boardGameId,
  myTip,
}: BoardGameTipsProps) => {
  return (
    <>
      {!myTip && (
        <div className='flex items-center justify-between p-4'>
          <span className='font-bold'>공략</span>
          <Link to={`board-games/${boardGameId}/${name}/tip/create`}>
            <Button className='flex w-fit items-center gap-0.5 rounded-3xl bg-primary p-3 pl-2 text-white'>
              <Icon id='add-line' size={17} />
              <span className='text-xs font-bold'>작성하기</span>
            </Button>
          </Link>
        </div>
      )}
      {tips.map(tip => {
        return <Tip tip={tip} key={tip.tipId} />;
      })}
    </>
  );
};

export default BoardGameTips;

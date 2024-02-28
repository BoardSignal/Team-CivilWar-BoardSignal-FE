import Icon from '@/components/Icon';
import Ripple from '@/components/Ripple';
import { getTimeDifferenceString } from '@/utils/getTimeDifferenceString';

interface TipProps {
  tipId: number;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  content: string;
}

const Tip = ({ nickname, profileImageUrl, createdAt, content }: TipProps) => {
  const DEFAULT_PROFILE_IMAGE_URL = 'https://picsum.photos/200/200';

  return (
    <div className='flex gap-2 border-b border-gray-accent7 p-4'>
      <img
        src={profileImageUrl || DEFAULT_PROFILE_IMAGE_URL}
        className='h-10 w-10 rounded-full object-cover'
      />
      <div className='flex w-full flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <span className='text-accent1 text-sm font-bold'>{nickname}</span>
          <span className='text-[10px] text-gray-accent3'>
            {getTimeDifferenceString(createdAt)}
          </span>
        </div>
        <p className='text-gray-accent1'>{content}</p>
        <div className='flex items-center gap-1'>
          <Ripple>
            <Icon id='thumb-up-line' size={16} className='text-gray-accent3' />
          </Ripple>
          <span className='text-xs text-gray-accent1'>2</span>
        </div>
      </div>
    </div>
  );
};

interface TipsProps {
  tips: TipProps[];
}

const Tips = ({ tips }: TipsProps) => {
  return (
    <>
      <div className='flex items-center justify-between p-4'>
        <span className='font-bold'>공략</span>
        <Ripple className='flex w-fit items-center gap-0.5 rounded-3xl bg-primary p-3 pl-2 text-white'>
          <Icon id='add-line' size={17} />
          <span className='text-xs font-bold'>작성하기</span>
        </Ripple>
      </div>
      {tips.map(tip => {
        const { nickname, profileImageUrl, createdAt, content, tipId } = tip;

        return (
          <Tip
            key={tipId}
            tipId={tipId}
            nickname={nickname}
            profileImageUrl={profileImageUrl}
            createdAt={createdAt}
            content={content}
          />
        );
      })}
    </>
  );
};

export default Tips;

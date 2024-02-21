import Chip from '@/components/Chip';
import Icon from '@/components/Icon';

const DEFAULT_BOARD_GAME_IMAGE_URL = 'https://picsum.photos/200/200';

interface InfoProps {
  name: string;
  imageUrl: string;
  minParticipants: number;
  maxParticipants: number;
  fromPlayTime: number;
  toPlayTime: number;
  difficulty: string;
  categories: string[];
  wishCount: number;
}

const Info = ({
  name,
  imageUrl,
  wishCount,
  minParticipants,
  maxParticipants,
  fromPlayTime,
  toPlayTime,
  difficulty,
  categories,
}: InfoProps) => {
  return (
    <>
      <img
        src={imageUrl || DEFAULT_BOARD_GAME_IMAGE_URL}
        className='mx-auto h-[240px] w-[390px] object-cover'
      />
      <div className='flex flex-col items-center gap-3 py-5'>
        <div className='flex flex-col items-center gap-1'>
          <span className='font-bold text-gray-accent1'>{name}</span>
          <div className='flex flex-wrap gap-2'>
            {categories.map(category => (
              <Chip key={category} size='small'>
                {category}
              </Chip>
            ))}
          </div>
        </div>
        <span className='flex items-center gap-1'>
          <span className='flex items-center gap-0.5'>
            <span className='text-sm font-bold text-gray-accent1'>난이도</span>
            <span className='text-xs text-gray-accent2'>{difficulty}</span>
          </span>
          <span className='flex items-center gap-0.5'>
            <span className='text-sm font-bold text-gray-accent1'>인원</span>
            <span className='text-xs text-gray-accent2'>{`${minParticipants}-${maxParticipants}`}</span>
          </span>
          <span className='flex items-center gap-0.5'>
            <span className='text-sm font-bold text-gray-accent1'>
              소요시간
            </span>
            <span className='text-xs text-gray-accent2'>{`${fromPlayTime}분-${toPlayTime}분`}</span>
          </span>
        </span>
        <div className='flex flex-col items-center'>
          <div className='flex h-8 w-8 items-center justify-center rounded-full border border-gray-accent3 '>
            <Icon id='bookmark-line' className='text-gray-accent3'></Icon>
          </div>
          <span>{wishCount}</span>
        </div>
      </div>
    </>
  );
};

export default Info;

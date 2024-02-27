import smileFace from '@/assets/smiling-face.png';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { getColorByTemperature } from '@/utils/TemperatureColor';
import { cn } from '@/utils/cn';

interface UserTemperatureProps {
  value: number;
}

const UserSignalTemperature = ({ value = 50.3 }: UserTemperatureProps) => {
  const { text, background } = getColorByTemperature(value);

  return (
    <div className='flex flex-col items-end gap-1'>
      <div className='flex'>
        <div className='flex flex-col'>
          <span
            className={cn(
              'ml-auto flex items-center gap-1 text-sm font-bold',
              text,
            )}
          >
            {`${value}˚C`}
          </span>
          <div className='h-1 overflow-hidden rounded-2xl bg-gray-accent7'>
            <div
              className={cn('h-full', background)}
              style={{ width: `${value}%` }}
            ></div>
          </div>
        </div>
        <img src={smileFace} alt='Signal' className='ml-1 h-6 w-6' />
      </div>
      <Popover>
        <PopoverTrigger className='pb-2'>
          <span className='flex w-fit gap-1 text-xs text-gray-accent3 underline'>
            시그널온도
          </span>
        </PopoverTrigger>
        <PopoverContent className='relative right-[60px] z-20'>
          <p className='userTooltip'>
            시그널온도는 다른 사용자로부터 받은 리뷰, 신고, 운영자 제재 등을
            종합해서 만든 매너 지표입니다.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserSignalTemperature;

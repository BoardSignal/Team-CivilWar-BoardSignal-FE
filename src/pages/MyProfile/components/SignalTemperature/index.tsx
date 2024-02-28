import smileFace from '@/assets/smiling-face.png';
import Icon from '@/components/Icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { cn } from '@/utils/cn';

interface TemperatureProps {
  value: number;
}

const getColorByTemperature = (value: number) => {
  if (value < 12.5)
    return { text: 'text-manner-accent7', background: 'bg-manner-accent7' };
  if (value <= 30)
    return { text: 'text-manner-accent6', background: 'bg-manner-accent6' };
  if (value <= 36.5)
    return { text: 'text-manner-accent5', background: 'bg-manner-accent5' };
  if (value <= 50.5)
    return { text: 'text-manner-accent4', background: 'bg-manner-accent4' };
  if (value <= 65.5)
    return { text: 'text-manner-accent3', background: 'bg-manner-accent3' };
  if (value <= 88)
    return { text: 'text-manner-accent2', background: 'bg-manner-accent2' };
  return { text: 'text-manner-accent1', background: 'bg-manner-accent1' };
};

const SignalTemperature = ({ value = 50.3 }: TemperatureProps) => {
  const { text, background } = getColorByTemperature(value);

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <span className='flex w-fit gap-1 text-xs text-gray-accent1 underline'>
            시그널온도
            <Icon id='information-line' size={16}></Icon>
          </span>
        </PopoverTrigger>
        <PopoverContent className='relative z-20 ml-[60px]'>
          <p className='tooltip'>
            시그널온도는 다른 사용자로부터 받은 리뷰, 신고, 운영자 제재 등을
            종합해서 만든 매너 지표입니다.
          </p>
        </PopoverContent>
      </Popover>
      <div className='flex flex-col gap-1'>
        <span
          className={cn(
            'ml-auto flex items-center gap-1 text-sm font-bold',
            text,
          )}
        >
          {`${value}˚C`}
          <img src={smileFace} alt='Signal' className='h-5 w-5' />
        </span>
        <div className='h-2 overflow-hidden rounded-2xl bg-gray-accent7'>
          <div
            className={cn('h-full', background)}
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SignalTemperature;

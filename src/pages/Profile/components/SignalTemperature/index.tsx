import smileFace from '@/assets/smiling-face.png';
import Icon from '@/components/Icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { SIGNAL_TEMPERATURE_EXPLAIN_MESSAGE } from '@/constants/messages/boardSignal';
import { cn } from '@/utils/cn';
import getColorByTemperature from '@/utils/getColorByTemperature';

interface TemperatureProps {
  value: number;
}

const SignalTemperature = ({ value }: TemperatureProps) => {
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
        <PopoverContent className='absolute -left-10 z-20'>
          <p className='tooltip'>{SIGNAL_TEMPERATURE_EXPLAIN_MESSAGE}</p>
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

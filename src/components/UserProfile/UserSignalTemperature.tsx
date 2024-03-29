import smileFaceEmoji from '@/assets/smiling-face.png';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { SIGNAL_TEMPERATURE_EXPLAIN_MESSAGE } from '@/constants/messages/boardSignal';
import { cn } from '@/utils/cn';
import getColorByTemperature from '@/utils/getColorByTemperature';

interface UserSignalTemperatureProps {
  temperature: number;
}

const UserSignalTemperature = ({ temperature }: UserSignalTemperatureProps) => {
  const { text, background } = getColorByTemperature(temperature);

  return (
    <div className='relative flex flex-col items-end gap-1'>
      <div className='flex'>
        <div className='flex flex-col'>
          <span
            className={cn(
              'ml-auto flex items-center gap-1 text-sm font-bold',
              text,
            )}
          >
            {`${temperature}˚C`}
          </span>
          <div className='h-1 overflow-hidden rounded-2xl bg-gray-accent7'>
            <div
              className={cn('h-full', background)}
              style={{ width: `${temperature}%` }}
            ></div>
          </div>
        </div>
        <img src={smileFaceEmoji} alt='' className='ml-1 size-6' />
      </div>
      <Popover>
        <PopoverTrigger className='pb-2'>
          <span className='flex w-fit gap-1 text-xs text-gray-accent3 underline'>
            시그널온도
          </span>
        </PopoverTrigger>
        <PopoverContent className='absolute -right-8 z-20'>
          <p className='tooltip text-gray-bg-base before:left-[85%]'>
            {SIGNAL_TEMPERATURE_EXPLAIN_MESSAGE}
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserSignalTemperature;

import informationLine from '@/assets/information-line.png';
import smileFace from '@/assets/smiling-face.png';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/Tooltip';

interface TemperatureProps {
  value: number;
}
const Temperature = ({ value = 50.3 }: TemperatureProps) => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className='flex w-fit gap-1 text-xs text-gray-accent1 underline'>
              {'시그널온도'}
              <img src={informationLine} alt='정보' className='h-4 w-4' />
            </span>
          </TooltipTrigger>
          <TooltipContent>
            시그널온도는 다른 사용자로부터 받은 리뷰, 신고, 운영자 제재 등을
            종합해서 만든 매너 지표입니다.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className='flex flex-col gap-1'>
        <span className='ml-auto flex items-center gap-1 text-sm font-bold text-blue-accent1'>
          {`${value}˚C`}
          <img src={smileFace} alt='Signal' className='h-5 w-5' />
        </span>
        <div className='h-2 overflow-hidden rounded-2xl bg-gray-accent7'>
          <div
            className='h-full bg-blue-accent1'
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;

import { cn } from '@/utils/cn';

import Icon from '../Icon';

interface EmptyListSmallProps {
  title: string;
  message: string;
  className?: string;
}

/**
 * List가 페이지의 전체 영역이 아닌 경우 사용되는 EmptyList 컴포넌트에요.
 *
 * 예시: 보드게임 상세 페이지의 공략 목록
 */
const EmptyListSmall = ({ title, message, className }: EmptyListSmallProps) => (
  <div
    className={cn(
      'flex h-fit flex-col items-center justify-center py-10',
      className,
    )}
  >
    <div className='flex w-1/2 flex-col items-center gap-2'>
      <Icon id='inbox-2-fill' className='h-auto w-1/3 text-gray-accent6' />
      <div className='shrink-0 break-keep text-center font-bold text-gray-accent1'>
        {title}
      </div>
      <div className='shrink-0 break-keep text-center text-xs text-gray-accent2'>
        {message}
      </div>
    </div>
  </div>
);

export default EmptyListSmall;

import Icon from '../Icon';

interface EmptyListFullScreenProps {
  title: string;
  message: string;
}

/**
 * List가 페이지의 전체 영역인 경우 사용되는 EmptyList 컴포넌트에요.
 *
 * 예시: 모임 목록 페이지
 */
const EmptyListFullScreen = ({ title, message }: EmptyListFullScreenProps) => (
  <div className='flex h-full flex-col items-center justify-center'>
    <div className='flex w-[50%] flex-col items-center gap-2'>
      <Icon id='inbox-2-fill' className='h-auto w-full text-gray-accent6' />
      <div className='shrink-0 break-keep text-center text-lg font-bold text-gray-accent1'>
        {title}
      </div>
      <div className='shrink-0 break-keep text-center text-sm text-gray-accent2'>
        {message}
      </div>
    </div>
  </div>
);

export default EmptyListFullScreen;

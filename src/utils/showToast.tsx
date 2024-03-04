import toast from 'react-hot-toast';

import Icon from '@/components/Icon';

/*
  토스트 커스터마이징 시 이 곳에 배치해요.
*/

/**
 * 기본 토스트의 오류 메시지보다 더 작게 스타일링했어요.
 */
export const showErrorToast = (message: string) => {
  toast.error(message, {
    // toast 자체의 style이 className의 스타일을 덮어써서 important를 적용해요
    className: '!bg-gray-accent1 !text-white !text-sm',
    icon: <Icon id='error-warning-fill' className='size-4 text-red-500' />,
  });
};

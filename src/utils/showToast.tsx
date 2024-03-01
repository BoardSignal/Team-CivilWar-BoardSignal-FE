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
    className: 'bg-gray-accent1 text-white text-sm',
    icon: <Icon id='error-warning-fill' className='size-4 text-red-500' />,
  });
};

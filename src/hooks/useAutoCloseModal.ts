import { useBlocker } from 'react-router-dom';

/**
 * 뒤로가기 버튼을 누르는 경우 `onClose`만 호출하고 뒤로 가기는 무시해요.
 *
 * Storybook은 iframe 내의 환경이어서 동작하지 않아요.
 *
 * @see https://reactrouter.com/en/main/hooks/use-blocker
 */
const useAutoCloseOnGoBack = (onClose: () => void) => {
  useBlocker(() => {
    onClose();
    return true;
  });
};

export default useAutoCloseOnGoBack;

import { useEffect } from 'react';

/**
 * 뒤로가기 버튼을 누르는 경우 `onClose`만 호출하고 뒤로 가기는 무시해요.
 *
 * Storybook은 iframe 내의 환경이어서 동작하지 않아요.
 *
 * @see https://stackoverflow.com/a/34337617
 */
const useAutoCloseOnGoBack = (isOpen: boolean, onClose: () => void) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    // popstate를 막을 수 없기 때문에 history.pushState를 미리 수행해야 돼요.
    // 이 때문에 원래 페이지와 동일한 url이 하나 더 history에 쌓이지만 어쩔 수 없어요.
    history.pushState(null, document.title, location.href);

    window.addEventListener('popstate', onClose);

    return () => {
      window.removeEventListener('popstate', onClose);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
};

export default useAutoCloseOnGoBack;

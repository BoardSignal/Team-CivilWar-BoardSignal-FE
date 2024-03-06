import { useEffect, useMemo, useState } from 'react';

/**
 * Error Boundary로 오류를 전파하기 위한 훅이에요.
 *
 * 이벤트 핸들러와 같이 별도의 Stack에서 실행될 때 사용해요.
 *
 * @example
 * const bindThrow = useBindThrow();
 * onClick: bindThrow(() => setIsOpen(true)),
 *
 * Promise의 경우 catch로 등록할 수 있어요.
 */
const useErrorBoundary = () => {
  const [error, throwError] = useState<unknown>(undefined);

  useEffect(() => {
    if (!error) {
      return;
    }
    throw error;
  }, [error]);

  const passError = useMemo(
    () =>
      // eslint-disable-next-line
      <T extends Function>(handler: T): T =>
      // eslint-disable-next-line
      // @ts-ignore
      (...args: unknown[]) => {
        try {
          handler(...args);
        } catch (error) {
          throwError(error);
        }
      },
    [],
  );

  return { passError, throwError };
};

export default useErrorBoundary;

import { QueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary, { ErrorBoundaryProps } from './ErrorBoundary';

/**
 * 하위 컴포넌트의 error 상태의 query의 상태를 reset 해요.
 */
const ApiErrorBoundary = ({
  onCatch,
  onReset,
  fallback: Fallback,
  children,
}: ErrorBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset: resetErrorStateQueries }) => {
        const handleReset = () => {
          resetErrorStateQueries();
          onReset?.();
        };

        return (
          <ErrorBoundary
            fallback={Fallback}
            onReset={handleReset}
            onCatch={onCatch}
          >
            {children}
          </ErrorBoundary>
        );
      }}
    </QueryErrorResetBoundary>
  );
};

export default ApiErrorBoundary;

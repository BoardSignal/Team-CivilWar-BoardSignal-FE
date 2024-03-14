import { QueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorAlertFullScreen from '../ErrorAlertFullScreen';
import ErrorBoundary, { type ErrorBoundaryProps } from './ErrorBoundary';

type ApiErrorBoundaryProps = Omit<ErrorBoundaryProps, 'fallback'>;

/**
 * 하위 컴포넌트의 error 상태의 query의 상태를 reset 해요.
 */
const ApiErrorBoundary = ({
  onCatch,
  onReset,
  children,
}: ApiErrorBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset: resetErrorStateQueries }) => {
        const handleReset = () => {
          resetErrorStateQueries();
          onReset?.();
        };

        return (
          <ErrorBoundary
            fallback={ErrorAlertFullScreen}
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

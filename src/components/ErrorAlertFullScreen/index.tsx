import { MouseEventHandler } from 'react';

import NotFoundErrorAlertFullScreen from './NotFoundErorAlertFullScreen';
import checkIsGetNotFound from './NotFoundErorAlertFullScreen/checkIsGetNotFound';
import checkIsInvalidStatePage from './NotFoundErorAlertFullScreen/checkIsInvalidStatePage';
import UnknownErrorAlertFullScreen from './UnknownErrorAlertFullScreen';

enum ErrorType {
  UNKNOWN_ERROR,
  GET_NOT_FOUND,
}

const getErrorType = (error: unknown) => {
  if (checkIsGetNotFound(error)) return ErrorType.GET_NOT_FOUND;
  if (checkIsInvalidStatePage(error)) return ErrorType.GET_NOT_FOUND;

  return ErrorType.UNKNOWN_ERROR;
};

const errorAlertMapping = {
  [ErrorType.UNKNOWN_ERROR]: UnknownErrorAlertFullScreen,
  [ErrorType.GET_NOT_FOUND]: NotFoundErrorAlertFullScreen,
};

export interface ErrorAlertFullScreenProps {
  error: unknown;
  onReset: MouseEventHandler<HTMLButtonElement>;
}

/**
 * 오류 유형에 따라 적절한 ErrorAlertFullScreen을 표시해요.
 */
const ErrorAlertFullScreen = ({
  error,
  onReset,
}: ErrorAlertFullScreenProps) => {
  const errorType = getErrorType(error);
  const AlertComponent = errorAlertMapping[errorType];

  return <AlertComponent onReset={onReset} />;
};

export default ErrorAlertFullScreen;

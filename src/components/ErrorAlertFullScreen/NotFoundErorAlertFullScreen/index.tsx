import { MouseEvent } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import {
  NOT_FOUND_ERROR_MESSAGE,
  NOT_FOUND_ERROR_TITLE,
} from '@/constants/messages/error';
import {
  getNotFoundFallbackButtonText,
  getNotFoundFallbackUrl,
} from '@/constants/notFoundFallback';

import { AlertProps } from '../AlertProps';
import DefaultErrorAlertFullScreen from '../DefaultErrorAlertFullScreen';

const NotFoundErrorAlertFullScreen = ({ onReset }: AlertProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pageName = getNotFoundFallbackButtonText(pathname);

  const goToFallbackUrl = (e: MouseEvent<HTMLButtonElement>) => {
    const url = getNotFoundFallbackUrl(pathname);
    navigate(url);
    onReset?.(e);
  };

  return (
    <DefaultErrorAlertFullScreen
      onReset={goToFallbackUrl}
      isShowingErrorIcon={true}
      title={NOT_FOUND_ERROR_TITLE}
      message={NOT_FOUND_ERROR_MESSAGE}
      buttonText={`${pageName} 페이지로 이동하기`}
      buttonIconId='arrow-left-line'
    />
  );
};

export default NotFoundErrorAlertFullScreen;

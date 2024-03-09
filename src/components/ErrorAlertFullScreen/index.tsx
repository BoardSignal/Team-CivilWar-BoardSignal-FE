import { MouseEventHandler } from 'react';

import {
  DEFAULT_ERROR_MESSAGE,
  DEFAULT_ERROR_TITLE,
} from '@/constants/messages/error';

import Button, { ButtonProps } from '../Button';
import Icon from '../Icon';

export interface ErrorAlertProps {
  error: unknown;
  onReset: MouseEventHandler<HTMLButtonElement>;
  isShowingErrorIcon?: boolean;
  title?: string;
  message?: string;
  buttonText?: string;
}

const ErrorIcon = () => (
  <Icon id='error-warning-fill' className='h-auto w-full text-gray-accent6' />
);

const RefreshButton = ({ children, ...props }: ButtonProps) => (
  <Button variant='outline' className='flex shrink-0 gap-2' {...props}>
    <Icon id='refresh-line' />
    {children}
  </Button>
);

/**
 * 전체 화면에 최적화된 오류 안내 화면이에요.
 */
const ErrorAlertFullScreen = ({
  onReset,
  isShowingErrorIcon = true,
  title = DEFAULT_ERROR_TITLE,
  message = DEFAULT_ERROR_MESSAGE,
  buttonText = '새로 고침하기',
}: ErrorAlertProps) => (
  <div className='flex h-full flex-col items-center justify-center'>
    <div className='flex w-[50%] flex-col items-center gap-2'>
      {isShowingErrorIcon && <ErrorIcon />}
      <div className='shrink-0 break-keep text-center text-lg font-bold text-gray-accent1'>
        {title}
      </div>
      <div className='shrink-0 break-keep text-center text-sm text-gray-accent2'>
        {message}
      </div>
      <RefreshButton onClick={onReset}>{buttonText}</RefreshButton>
    </div>
  </div>
);

export default ErrorAlertFullScreen;

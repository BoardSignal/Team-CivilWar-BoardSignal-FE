import { MouseEventHandler } from 'react';

import Button, { type ButtonProps } from '../Button';
import Icon from '../Icon';
import { IconName } from '../Icon/type';

export interface DefaultErrorAlertProps {
  onReset?: MouseEventHandler<HTMLButtonElement>;
  isShowingErrorIcon: boolean;
  title: string;
  message: string;
  buttonText: string;
  buttonIconId: IconName;
}

export interface ErrorAlertButtonProps extends ButtonProps {
  iconId: IconName;
}

const ErrorIcon = () => (
  <Icon id='error-warning-fill' className='h-auto w-full text-gray-accent6' />
);

const ErrorAlertButton = ({
  iconId,
  children,
  ...props
}: ErrorAlertButtonProps) => (
  <Button variant='outline' className='flex shrink-0 gap-2' {...props}>
    <Icon id={iconId} />
    {children}
  </Button>
);

const DefaultErrorAlertFullScreen = ({
  onReset,
  isShowingErrorIcon,
  title,
  message,
  buttonText,
  buttonIconId,
}: DefaultErrorAlertProps) => (
  <div className='flex h-full flex-col items-center justify-center'>
    <div className='flex w-[50%] flex-col items-center gap-2'>
      {isShowingErrorIcon && <ErrorIcon />}
      <div className='shrink-0 break-keep text-center text-lg font-bold text-gray-accent1'>
        {title}
      </div>
      <div className='shrink-0 break-keep text-center text-sm text-gray-accent2'>
        {message}
      </div>
      <ErrorAlertButton iconId={buttonIconId} onClick={onReset}>
        {buttonText}
      </ErrorAlertButton>
    </div>
  </div>
);

export default DefaultErrorAlertFullScreen;

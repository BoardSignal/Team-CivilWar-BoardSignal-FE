import {
  DEFAULT_ERROR_MESSAGE,
  DEFAULT_ERROR_TITLE,
} from '@/constants/messages/error';

import { AlertProps } from '../AlertProps';
import DefaultErrorAlertFullScreen from '../DefaultErrorAlertFullScreen';

const UnknownErrorAlertFullScreen = ({ onReset }: AlertProps) => (
  <DefaultErrorAlertFullScreen
    onReset={onReset}
    isShowingErrorIcon={true}
    title={DEFAULT_ERROR_TITLE}
    message={DEFAULT_ERROR_MESSAGE}
    buttonText='새로 고침하기'
    buttonIconId='refresh-line'
  />
);

export default UnknownErrorAlertFullScreen;

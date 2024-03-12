import { PropsWithChildren } from 'react';

import { Navigate } from 'react-router-dom';

import { useGetIsJoinedUserApi } from '@/apis/getLoggedInUser';
import {
  NOT_LOGGED_IN_USER_MESSAGE,
  NOT_SIGN_UP_USER_MESSAGE,
} from '@/constants/messages/error';
import { LOGIN_PAGE_URL, REGISTER_PAGE_URL } from '@/constants/pageRoutes';
import { STORAGE_KEY_ACCESS_TOKEN } from '@/constants/storageKeys';
import { showErrorToast } from '@/utils/showToast';

import SpinnerFullScreen from '../Spinner/SpinnerFullScreen';

const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);

const RouterProtector = ({ children }: PropsWithChildren) => {
  const { data, isLoading } = useGetIsJoinedUserApi(accessToken);

  // Toast가 명확하게 보이지않아 setTimeout을 사용하여 실행시간을 조정하였습니다.
  if (accessToken === null) {
    setTimeout(() => {
      showErrorToast(NOT_LOGGED_IN_USER_MESSAGE);
    }, 0);
    return <Navigate to={LOGIN_PAGE_URL} />;
  }

  if (isLoading) {
    return <SpinnerFullScreen />;
  }

  // TODO: data의 타입이 명확하게 추론되지 않아 ?. 연산자를 사용하였습니다.
  if (!data?.isJoined) {
    setTimeout(() => {
      showErrorToast(NOT_SIGN_UP_USER_MESSAGE);
    }, 0);
    return <Navigate to={REGISTER_PAGE_URL} />;
  }

  return children;
};

export default RouterProtector;

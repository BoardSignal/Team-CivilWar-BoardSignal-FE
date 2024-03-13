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

//FIXME : setTimeout을 사용하지 않으면 toast에 딜레이가 생겨서 임시적으로 setTimeout을 사용하였습니다.
const ErrorToast = (errorMessage: string) =>
  setTimeout(() => {
    showErrorToast(errorMessage);
  }, 0);

const AuthorizedRoute = ({ children }: PropsWithChildren) => {
  const { data, isLoading } = useGetIsJoinedUserApi(accessToken);

  if (accessToken === null) {
    ErrorToast(NOT_LOGGED_IN_USER_MESSAGE);
    return <Navigate to={LOGIN_PAGE_URL} />;
  }

  if (isLoading) {
    return <SpinnerFullScreen />;
  }

  // FIXME: data의 타입이 명확하게 추론되지 않아 ?. 연산자를 사용하였습니다.
  if (!data?.isJoined) {
    ErrorToast(NOT_SIGN_UP_USER_MESSAGE);
    return <Navigate to={REGISTER_PAGE_URL} />;
  }

  return children;
};

export default AuthorizedRoute;

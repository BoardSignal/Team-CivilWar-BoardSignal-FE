import { PropsWithChildren } from 'react';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { ERROR_TOAST_MESSAGE_ON_SERVER_ERROR } from './constants/messages/error';
import { showErrorToast } from './utils/showToast';

const noticeUserOnServerError = (error: unknown) => {
  if (!isAxiosError(error)) {
    throw error;
  }

  return showErrorToast(ERROR_TOAST_MESSAGE_ON_SERVER_ERROR);
};

// TODO: Sentry 등의 로그 수집, 모니터링 도구 사용하기
// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line
const logQueryError = (error: unknown) => {};
// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line
const logMutationError = (error: unknown) => {};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 0,
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: noticeUserOnServerError,
    },
  },
  queryCache: new QueryCache({
    onError: logQueryError,
  }),
  mutationCache: new MutationCache({
    onError: logMutationError,
  }),
});

export const ReactQueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

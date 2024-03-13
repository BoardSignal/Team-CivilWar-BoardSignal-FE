import { SharedOptions, delay, http } from 'msw';
import { setupWorker } from 'msw/browser';

import boardGameDetailMocks from './boardGameDetail';
import notificationsMocks from './notifications';
import profilesMocks from './profiles';

/**
 * mock service worker를 설정하는 함수에요.
 *
 * 새로운 핸들러를 추가해야 한다면 `handlers`에 추가해주세요 :)
 *
 * 비동기로 실행되기 때문에 await으로 반드시 대기해주세요.
 *
 * @example
 * await enableAPIMocks();
 */
export const enableAPIMocks = () => {
  const handlers = [
    globalDelay,
    ...notificationsMocks,
    ...boardGameDetailMocks,
    ...profilesMocks,
  ];
  const worker = setupWorker(...handlers);

  return worker.start({
    onUnhandledRequest: ignoreDevResources,
  });
};

// 모든 핸들러에 자연스러운 서버 delay를 적용해요.
const globalDelay = http.all('*', async () => {
  await delay();
});

const PATHS_IGNORED_BY_MSW = [
  '/src',
  '/virtual',
  '/.storybook',
  '.vite',
  '.json',
  'favicon',
  'fonts',
];

type OnUnHandledRequest = SharedOptions['onUnhandledRequest'];

export const ignoreDevResources: OnUnHandledRequest = (req, print) => {
  if (PATHS_IGNORED_BY_MSW.find(path => req.url.includes(path))) {
    return;
  }

  print.warning();
};

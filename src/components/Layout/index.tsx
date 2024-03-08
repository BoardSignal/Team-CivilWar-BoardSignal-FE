import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import ApiErrorBoundary from '../ErrorBoundary/ApiErrorBoundary';
import SpinnerFullScreen from '../Spinner/SpinnerFullScreen';
import Introduction from './Introduction';
import { RootLayout } from './RootLayout';
import ToastRoot from './ToastRoot';

export const LAYOUT_ROOT_ID = 'layoutRoot';

/**
 * PC, 태블릿 등 핸드폰보다 큰 화면으로 접속 시 화면 폭을 핸드폰의 크기로 제한해요.
 *
 * 화면의 나머지 빈 영역은 소개 내용으로 채워요.
 *
 */
const ResponsiveLayoutWrapper = () => {
  return (
    <div className='flex h-screen w-screen flex-row items-center justify-center gap-10'>
      <div className='hidden shrink sm:flex'>
        <Introduction />
      </div>
      <RootLayout>
        <ApiErrorBoundary>
          <Suspense fallback={<SpinnerFullScreen />}>
            <Outlet />
          </Suspense>
          <ToastRoot />
        </ApiErrorBoundary>
      </RootLayout>
    </div>
  );
};

export default ResponsiveLayoutWrapper;

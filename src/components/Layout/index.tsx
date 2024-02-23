import { Outlet } from 'react-router-dom';

import { Introduction } from './Introduction';

export const LAYOUT_ROOT_ID = 'layoutRoot';

/**
 * PC, 태블릿 등 핸드폰보다 큰 화면으로 접속 시 화면 폭을 핸드폰의 크기로 제한해요.
 *
 * 화면의 나머지 빈 영역은 소개 내용으로 채워요.
 *
 * min width = 350px, max width = 450px로 지정해요.
 */
export const ResponsiveLayoutWrapper = () => {
  return (
    <div className='flex h-screen w-screen flex-row items-center justify-center gap-10'>
      <div className='hidden shrink sm:flex'>
        <Introduction />
      </div>
      <div
        id={LAYOUT_ROOT_ID}
        className='relative h-full w-full min-w-[350px] max-w-[450px] shrink-0 shadow-xl'
      >
        <Outlet />
      </div>
    </div>
  );
};

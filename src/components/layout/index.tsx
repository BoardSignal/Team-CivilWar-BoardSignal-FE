import { PropsWithChildren } from 'react';

import { Introduction } from './Introduction';

/**
 * PC, 태블릿 등 핸드폰보다 큰 화면으로 접속 시 화면 폭을 핸드폰의 크기로 제한한다.
 *
 * 화면의 나머지 빈 영역은 소개 내용으로 채운다.
 *
 * min width = 350px, max width = 450px로 지정하고 있다.
 */
export const ResponsiveLayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-screen h-screen flex justify-center flex-row items-center gap-10'>
      <div className='hidden sm:flex shrink'>
        <Introduction />
      </div>
      <div className='h-screen w-full shadow-xl shrink-0 min-w-[350px] max-w-[450px]'>
        {children}
      </div>
    </div>
  );
};

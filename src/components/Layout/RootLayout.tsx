import { PropsWithChildren } from 'react';

import clsx from 'clsx';

import { LAYOUT_ROOT_ID } from '.';

/**
 * min width = 350px, max width = 450px로 지정해요.
 *
 * min height = 600px, max height = 950px로 지정해요.
 */
export const RootLayout = ({ children }: PropsWithChildren) => (
  <div
    id={LAYOUT_ROOT_ID}
    className={clsx(
      'relative flex h-full w-full shrink-0 flex-col shadow-xl dark:border dark:border-gray-accent7 dark:shadow-none',
      'max-h-[950px] min-h-[600px] min-w-[350px] max-w-[450px]',
    )}
  >
    {children}
  </div>
);

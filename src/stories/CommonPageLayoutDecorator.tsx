import { Suspense } from 'react';

import { type Decorator } from '@storybook/react';

import { LAYOUT_ROOT_ID } from '@/components/Layout';
import ToastRoot from '@/components/Layout/ToastRoot';
import SpinnerFullScreen from '@/components/Spinner/SpinnerFullScreen';

export const CommonPageLayoutDecorator: Decorator = Story => (
  <div
    id={LAYOUT_ROOT_ID}
    className='relative h-[844px] w-full shrink-0 shadow-xl dark:border dark:border-gray-accent7 dark:shadow-gray-900'
  >
    <Suspense fallback={<SpinnerFullScreen />}>
      <Story />
    </Suspense>
    <ToastRoot />
  </div>
);

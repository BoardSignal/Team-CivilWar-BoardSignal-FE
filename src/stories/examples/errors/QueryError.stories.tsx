import { Suspense, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { useSuspenseQuery } from '@tanstack/react-query';

import Button from '@/components/Button';
import ApiErrorBoundary from '@/components/ErrorBoundary/ApiErrorBoundary';
import Spinner from '@/components/Spinner';

import { CommonPageLayoutDecorator } from '../../CommonPageLayoutDecorator';

const ExmapleFetcher = () => {
  useSuspenseQuery({
    queryKey: ['queryError'],
    queryFn: () =>
      new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Internal Server Error!'));
        }, 500);
      }),
  });

  return null;
};

const Example = () => {
  const [isClicked, setIsClicked] = useState(false);

  const startFetching = () => {
    setIsClicked(true);
  };

  const handleReset = () => setIsClicked(false);

  return (
    <ApiErrorBoundary onReset={handleReset}>
      <div className='flex h-full flex-col items-center justify-center gap-2 p-4'>
        {isClicked && (
          <Suspense fallback={<Spinner />}>
            <ExmapleFetcher />
          </Suspense>
        )}
        <h1 className='text-lg font-bold text-gray-accent1'>
          버튼을 눌러 오류를 발생시켜보세요!
        </h1>
        <Button variant='danger' onClick={startFetching} className='w-fit px-2'>
          요청하기
        </Button>
      </div>
    </ApiErrorBoundary>
  );
};

const meta: Meta<typeof Example> = {
  title: 'examples/오류 핸들링/Query 전역 오류 처리',
  tags: ['autodocs'],
  component: Example,
  decorators: [CommonPageLayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof Example>;

export const DefaultTemplate: Story = {};

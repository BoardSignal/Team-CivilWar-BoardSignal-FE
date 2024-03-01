import type { Meta, StoryObj } from '@storybook/react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import Button from '@/components/Button';

import { CommonPageLayoutDecorator } from '../../CommonPageLayoutDecorator';

const Example = () => {
  const { mutateAsync } = useMutation({
    mutationFn: () =>
      new Promise((_, reject) => {
        setTimeout(() => reject(new AxiosError('Internal Server Error!')), 150);
      }),
  });

  const callApi = () => mutateAsync();

  return (
    <div className='flex h-full flex-col items-center justify-center gap-2'>
      <h1 className='text-lg font-bold text-gray-accent1'>
        버튼을 눌러 오류를 발생시켜보세요!
      </h1>
      <Button variant='danger' onClick={callApi} className='w-fit px-2'>
        오류를 발생시키기
      </Button>
    </div>
  );
};

const meta: Meta<typeof Example> = {
  title: 'examples/오류 핸들링/Mutation 전역 오류 처리',
  tags: ['autodocs'],
  component: Example,
  decorators: [CommonPageLayoutDecorator],
};

export default meta;

type Story = StoryObj<typeof Example>;

export const DefaultTemplate: Story = {};

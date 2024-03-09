import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { useMutation } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';
import { HttpResponse, delay, http } from 'msw';

import { api } from '@/apis/core';
import Button from '@/components/Button';
import Label from '@/components/Label';
import TextInput from '@/components/TextInput';
import { API_BASE_URL } from '@/constants/apiRoutes';
import { showErrorToast } from '@/utils/showToast';

import { CommonPageLayoutDecorator } from '../../CommonPageLayoutDecorator';

interface RegisterApiResponse {
  name: string;
}

const postUserRegisterApi = (name: string) =>
  api.post<RegisterApiResponse>({
    url: '/users',
    data: {
      name,
    },
  });

const useRegister = () => {
  const { mutateAsync } = useMutation({
    mutationFn: postUserRegisterApi,
  });

  return mutateAsync;
};

const Example = () => {
  const [name, setName] = useState('kim');
  const registerApi = useRegister();

  const register = async () => {
    const { isBadRequest, data } = await registerApi(name);
    if (isBadRequest) {
      return showErrorToast(data.message);
    }
  };

  return (
    <div className='flex h-full flex-col items-center justify-center gap-2'>
      <div className='flex w-[50%] flex-col gap-2'>
        <h1 className='text-lg font-bold text-gray-accent1'>회원 가입하기</h1>
        <p className='text-sm text-gray-accent3'>kim씨는 이미 가입했어요</p>
        <Label title='이름' isRequired>
          <TextInput
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Label>
        <Button variant='primary' onClick={register}>
          가입하기
        </Button>
      </div>
    </div>
  );
};

const meta: Meta<typeof Example> = {
  title: 'examples/오류 핸들링/Mutation status 분기 처리',
  tags: ['autodocs'],
  component: Example,
  decorators: [CommonPageLayoutDecorator],
  parameters: {
    msw: {
      handlers: [
        http.post<object, { name: string }>(
          `${API_BASE_URL}/users`,
          async ({ request }) => {
            await delay();

            const { name } = await request.json();

            if (name === 'kim') {
              throw HttpResponse.json(
                {
                  message: '이미 가입한 사용자 이름입니다.',
                },
                {
                  status: HttpStatusCode.BadRequest,
                },
              );
            }

            return HttpResponse.json({
              name,
            });
          },
        ),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Example>;

export const DefaultTemplate: Story = {};

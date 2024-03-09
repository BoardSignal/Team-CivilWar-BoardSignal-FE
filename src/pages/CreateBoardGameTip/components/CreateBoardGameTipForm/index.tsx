import { useForm } from 'react-hook-form';

import type { CreateBoardGameTipRequestBody } from '@/apis/boardGameTip';
import Button from '@/components/Button';
import FormErrorMessage from '@/components/FormErrorMessage';
import Label from '@/components/Label';
import Textarea from '@/components/TextArea';

import useCreateBoardGameTip from '../../hooks/useCreateBoardGameTip';
import { createBoardGameTipFormOptions } from './formSchema';

export type OnBoardGameTipCreate = () => void;

interface BoardGameTipCreateFormProps {
  onCreate: OnBoardGameTipCreate;
  boardGameId: string;
}

const BoardGameTipCreateForm = ({
  onCreate,
  boardGameId,
}: BoardGameTipCreateFormProps) => {
  const createBoardGameTip = useCreateBoardGameTip(onCreate);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm(createBoardGameTipFormOptions);

  const onSubmitBoardGameTip = (data: CreateBoardGameTipRequestBody) => {
    const request = { ...data, boardGameId };
    createBoardGameTip(request);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitBoardGameTip)}
      className='flex h-full flex-col'
    >
      <div className='flex h-full grow flex-col gap-2 p-4'>
        <Label
          title='공략 내용'
          isRequired
          currentLength={watch('content')?.length}
          maxLength={500}
        >
          <Textarea
            maxLength={500}
            {...register('content')}
            variant={errors.content ? 'error' : 'default'}
          />
          <FormErrorMessage message={errors.content?.message} />
        </Label>
      </div>
      <div className='p-4'>
        <Button type='submit' variant={isValid ? 'primary' : 'inactive'}>
          완료
        </Button>
      </div>
    </form>
  );
};

export default BoardGameTipCreateForm;

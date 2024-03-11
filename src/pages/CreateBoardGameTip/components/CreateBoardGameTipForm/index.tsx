import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

import Button from '@/components/Button';
import FormErrorMessage from '@/components/FormErrorMessage';
import Label from '@/components/Label';
import Textarea from '@/components/TextArea';
import {
  MAX_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  TRIM_ERROR_MESSAGE,
} from '@/constants/messages/error';

import useCreateBoardGameTip from '../../hooks/useCreateBoardGameTip';

export type OnBoardGameTipCreate = () => void;

interface BoardGameTipCreateFormProps {
  onCreate: OnBoardGameTipCreate;
  boardGameId: string;
}

const CreateBoardGameTipForm = ({
  onCreate,
  boardGameId,
}: BoardGameTipCreateFormProps) => {
  const createBoardGameTip = useCreateBoardGameTip(onCreate, boardGameId);

  const createBoardGameTipSchema = object({
    content: string()
      .required(REQUIRED_ERROR_MESSAGE)
      .trim()
      .min(2, `${TRIM_ERROR_MESSAGE} 2${MIN_LENGTH_ERROR_MESSAGE}`)
      .max(500, `50${MAX_LENGTH_ERROR_MESSAGE}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: 'all',
    defaultValues: { content: '' },
    resolver: yupResolver(createBoardGameTipSchema),
  });

  const onSubmitBoardGameTip = ({ content }: { content: string }) => {
    createBoardGameTip(content);
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

export default CreateBoardGameTipForm;

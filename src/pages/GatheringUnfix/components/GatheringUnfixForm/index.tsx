import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

import Button from '@/components/Button';
import FormErrorMessage from '@/components/FormErrorMessage';
import Label from '@/components/Label';
import TextInput from '@/components/TextInput';
import {
  MAX_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
  TRIM_ERROR_MESSAGE,
} from '@/constants/messages/error';
import { UNFIX_PLACEHOLDER_MESSAGE } from '@/constants/messages/placeholder';

import useGatheringUnfix from '../../hooks/useGatheringUnfix';

export type OnGatheringUnfix = () => void;

interface GatheringUnfixFormValues {
  reason: string;
}

interface GatheringUnfixFormProps {
  gatheringId: string;
  onUnfix: OnGatheringUnfix;
}

const GatheringUnfixForm = ({
  gatheringId,
  onUnfix,
}: GatheringUnfixFormProps) => {
  const gatheringUnfixSchema = object({
    reason: string()
      .required(REQUIRED_ERROR_MESSAGE)
      .trim()
      .min(2, `${TRIM_ERROR_MESSAGE} 2${MIN_LENGTH_ERROR_MESSAGE}`)
      .max(50, `50${MAX_LENGTH_ERROR_MESSAGE}`),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: { reason: '' },
    resolver: yupResolver(gatheringUnfixSchema),
  });

  const createGatheringUnfix = useGatheringUnfix(onUnfix, gatheringId);

  const onSubmitUnfix = (data: GatheringUnfixFormValues) => {
    createGatheringUnfix({
      gatheringId,
      reason: data.reason,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitUnfix)} className='flex grow flex-col'>
      <Label
        title='취소 사유'
        isRequired
        maxLength={50}
        currentLength={watch('reason')?.length}
        className='grow p-4'
      >
        <TextInput
          variant={errors.reason ? 'error' : 'default'}
          maxLength={50}
          placeholder={UNFIX_PLACEHOLDER_MESSAGE}
          {...register('reason')}
        />
        <FormErrorMessage message={errors.reason?.message} />
      </Label>
      <div className='border-t border-gray-accent7 p-4'>
        <Button type='submit' variant={isValid ? 'danger' : 'inactive'}>
          모임 확정 취소하기
        </Button>
      </div>
    </form>
  );
};

export default GatheringUnfixForm;

import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import FormErrorMessage from '@/components/FormErrorMessage';
import Label from '@/components/Label';
import TextInput from '@/components/TextInput';
import { UNFIX_PLACEHOLDER_MESSAGE } from '@/constants/messages/placeholder';

import useGatheringUnfix from '../../hooks/useGatheringUnfix';
import { gatheringUnfixFormOptions } from './formSchema';

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm(gatheringUnfixFormOptions);

  const unfixGathering = useGatheringUnfix(onUnfix, gatheringId);

  const onSubmitUnfix = (data: GatheringUnfixFormValues) => {
    unfixGathering(data.reason);
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

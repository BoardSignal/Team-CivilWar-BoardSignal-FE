import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import Alert from '@/components/Alert';
import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Label from '@/components/Label';
import LocationSelect from '@/components/LocationSelect';
import Select from '@/components/Select';
import SubwaySelect from '@/components/SubwaySelect';

import { GatheringFixFormValues, gatheringFixFormOptions } from './formSchema';
import gatheringFixRequestMapper from './gatheringFixRequestMapper';
import useCreateGathering from './useGatheringFix';

interface GatheringFixFormProps {
  onCreate: () => void;
}

const TIME_PICKER_PLACEHOLDER = '시간 선택';

const TIME_PICKER_OPTIONS = [
  '오전 10:00',
  '오전 10:30',
  '오전 11:00',
  '오전 11:30',
  '오후 12:00',
  '오후 12:30',
  '오후 1:00',
  '오후 1:30',
  '오후 2:00',
  '오후 2:30',
  '오후 3:00',
  '오후 3:30',
  '오후 4:00',
  '오후 4:30',
  '오후 5:00',
  '오후 5:30',
  '오후 6:00',
  '오후 6:30',
  '오후 7:00',
  '오후 7:30',
  '오후 8:00',
  '오후 8:30',
  '오후 9:00',
  '오후 9:30',
  '오후 10:00',
];

const GatheringFixForm = ({ onCreate }: GatheringFixFormProps) => {
  const { gatheringId } = useParams() as { gatheringId: string };

  const gatheringFix = useCreateGathering(onCreate, gatheringId);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm(gatheringFixFormOptions);

  const onSubmitGatheringFix = (data: GatheringFixFormValues) => {
    const request = gatheringFixRequestMapper(data);
    gatheringFix(request);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitGatheringFix)}
      className='flex grow flex-col overflow-y-hidden'
    >
      <section className='flex flex-col gap-4 p-4'>
        <div className='flex h-full grow flex-col gap-8 px-4'>
          <div className='-mb-4'>
            <Alert>모임이 확정된 시작 시각과 장소를 입력해주세요</Alert>
          </div>
          <Label isRequired title='시작 시간'>
            <Select
              variant={errors.time ? 'error' : 'default'}
              options={TIME_PICKER_OPTIONS}
              placeholder={TIME_PICKER_PLACEHOLDER}
              {...register('time')}
            />
          </Label>
          <Controller
            name='date'
            control={control}
            render={({ field }) => {
              const { value, onChange } = field;

              return (
                <Label title='모임 날짜' isRequired>
                  <DatePicker value={value} onChange={onChange} />
                </Label>
              );
            }}
          />
          <Controller
            name='subwayStation'
            control={control}
            render={({ field }) => {
              const { value, onChange } = field;

              return (
                <Label title='지하철 역' isRequired>
                  <SubwaySelect value={value} onChange={onChange} />
                </Label>
              );
            }}
          />
          <Controller
            name='place'
            control={control}
            render={({ field }) => {
              const { value, onChange } = field;

              return (
                <Label title='모임 장소' isRequired>
                  <LocationSelect value={value} onChange={onChange} />
                </Label>
              );
            }}
          />
        </div>
        <div className='flex p-4'>
          <Button type='submit' variant={isValid ? 'primary' : 'inactive'}>
            모임 확정하기
          </Button>
        </div>
      </section>
    </form>
  );
};
export default GatheringFixForm;

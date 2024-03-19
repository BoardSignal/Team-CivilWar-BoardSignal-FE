import { useEffect } from 'react';

import { Controller, useForm } from 'react-hook-form';

import { useGetLoggedInUserApi } from '@/apis/loggedInUser';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import FormErrorMessage from '@/components/FormErrorMessage';
import ImageUpload from '@/components/ImageUpload';
import Label from '@/components/Label';
import LocationSelect from '@/components/LocationSelect';
import MultipleSelect from '@/components/MultipleSelect';
import Range from '@/components/Range';
import Select from '@/components/Select';
import SubwaySelect from '@/components/SubwaySelect';
import Textarea from '@/components/TextArea';
import TextInput from '@/components/TextInput';
import Alert from '@/components/alert';
import {
  AGE_RANGE_ALERT_MESSAGE,
  CATEGORY_SELECT_ALERT_MESSAGE,
} from '@/constants/messages/alert';
import { BOARDGAME_CATEGORIES } from '@/constants/options';
import { TIME_OPTIONS } from '@/constants/options';

import { gatheringCreateFormOptions } from './formSchema';
import gatheringCreateRequestMapper, {
  type GatheringCreateFormValues,
} from './gatheringCreateRequestMapper';
import useCreateGathering from './useCreateGathering';

export type OnGatheringCreate = (gatheringId: number) => void;

interface GatheringCreateFormProps {
  onCreate: OnGatheringCreate;
}

const GatheringCreateForm = ({ onCreate }: GatheringCreateFormProps) => {
  const { age: currentUserAge } = useGetLoggedInUserApi();
  const createGathering = useCreateGathering(onCreate);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    control,
    setValue,
  } = useForm(gatheringCreateFormOptions);

  const onSubmitGathering = (data: GatheringCreateFormValues) => {
    const request = gatheringCreateRequestMapper(data);
    createGathering(request);
  };

  // 현재 사용자의 나이에 맞게 나이대 필드의 선택 가능 범위를 설정해요.
  useEffect(() => {
    setValue('age', [
      Math.floor(currentUserAge / 10) * 10,
      Math.ceil(currentUserAge / 10) * 10,
    ]);
  }, [currentUserAge, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmitGathering)}
      className='flex grow flex-col overflow-y-hidden'
    >
      <div className='overflow-y-auto overflow-x-hidden'>
        <Controller
          name='thumbnailImage'
          control={control}
          render={({ field }) => {
            const { onChange } = field;

            return <ImageUpload variant='square' onChange={onChange} />;
          }}
        />
        <section className='flex flex-col gap-4 p-4'>
          <Label
            title='모임 제목'
            isRequired
            maxLength={50}
            currentLength={watch('title')?.length}
          >
            <TextInput
              variant={errors.title ? 'error' : 'default'}
              maxLength={50}
              {...register('title')}
            />
            <FormErrorMessage message={errors.title?.message} />
          </Label>
          <Label
            title='모임 설명'
            isRequired
            maxLength={500}
            currentLength={watch('description')?.length}
          >
            <Textarea
              variant={errors.description ? 'error' : 'default'}
              {...register('description')}
            />
            <FormErrorMessage message={errors.description?.message} />
          </Label>
          <Label title='동성만 참여하도록 제한할까요?'>
            <Checkbox {...register('isArrowedSameGender')}>예</Checkbox>
          </Label>
          <Label title='인원수' isRequired>
            <Controller
              name='headcount'
              control={control}
              render={({ field }) => {
                const { value, onChange } = field;

                return (
                  <Range
                    min={1}
                    max={8}
                    step={1}
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
          </Label>
          <Label title='시간대' isRequired>
            <Select
              variant={errors.time ? 'error' : 'default'}
              options={TIME_OPTIONS}
              placeholder='시간대 선택'
              {...register('time')}
            />
            <FormErrorMessage message={errors.time?.message} />
          </Label>
          <Label title='나이대' isRequired>
            <Controller
              name='age'
              control={control}
              render={({ field }) => {
                const { value, onChange } = field;

                return (
                  <Range
                    min={10}
                    max={40}
                    step={5}
                    includedValue={currentUserAge}
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
            <Alert>{AGE_RANGE_ALERT_MESSAGE}</Alert>
          </Label>
          <Label title='지역 (가까운 지하철역)' isRequired>
            <Controller
              name='station'
              control={control}
              render={({ field }) => {
                const { value, onChange } = field;

                return <SubwaySelect value={value} onChange={onChange} />;
              }}
            />
            <FormErrorMessage message={errors.station?.message} />
          </Label>
          <Label title='장소'>
            <Controller
              name='place'
              control={control}
              render={({ field }) => {
                const { value, onChange } = field;

                return <LocationSelect value={value} onChange={onChange} />;
              }}
            />
          </Label>
          <Label title='게임 카테고리'>
            <Controller
              name='categories'
              control={control}
              render={({ field }) => {
                const { value, onChange } = field;

                return (
                  <MultipleSelect
                    optionItems={BOARDGAME_CATEGORIES}
                    selectedItems={value}
                    limit={3}
                    onChange={onChange}
                  />
                );
              }}
            />
            <Alert>{CATEGORY_SELECT_ALERT_MESSAGE}</Alert>
          </Label>
        </section>
      </div>
      <div className='border-t border-gray-accent7 p-4'>
        <Button type='submit' variant={isValid ? 'primary' : 'inactive'}>
          모임 생성하기
        </Button>
      </div>
    </form>
  );
};

export default GatheringCreateForm;

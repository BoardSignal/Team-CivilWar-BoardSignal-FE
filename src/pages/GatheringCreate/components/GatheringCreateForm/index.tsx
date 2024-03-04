import { Dispatch, SetStateAction } from 'react';

import { Controller, useForm } from 'react-hook-form';

import { usePostGatheringCreateApi } from '@/apis/postGatheringCreate';
import type { GatheringCreateRequest } from '@/apis/postGatheringCreate';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import ImageUpload from '@/components/ImageUpload';
import Label from '@/components/Label';
import MultipleSelect from '@/components/MultipleSelect';
import Range from '@/components/Range';
import Select from '@/components/Select';
import Textarea from '@/components/TextArea';
import TextInput from '@/components/TextInput';
import Alert from '@/components/alert';

interface FormValues {
  thumbnailImage: File;
  roomTitle: string;
  description: string;
  isArrowedSameGender: boolean;
  headcount: number[];
  time: string;
  startTime: string;
  age: number[];
  subwayLine: string;
  subwayStation: string;
  place: string;
  categories: string[];
}

interface RequiredAndLengthRegister {
  required: boolean;
  name: FormValueNames;
  minLength?: number;
  maxLength?: number;
}

type FormValueNames =
  | 'roomTitle'
  | 'description'
  | 'time'
  | 'startTime'
  | 'subwayLine'
  | 'subwayStation'
  | 'place'
  | 'categories';

type SubmitForm = (data: FormValues) => void;

const BOARDGAME_CATEGORIES = [
  '워게임',
  '가족게임',
  '전략게임',
  '추상게임',
  '테마게임',
  '파티게임',
  '어린이게임',
  '컬렉터블게임',
];

const TIMES = ['평일 오전', '평일 오후', '주말 오전', '주말 오후'];

const REQUIRE_MESSAGE = '필수 입력 사항입니다.';
const AGE_ALERT_MESSAGE =
  '나이대는 본인 나이를 포함한 범위만 설정할 수 있어요.';

const ErrorMessage = ({ message }: { message: string | undefined }) => {
  return (
    <p role='alert' className='text-sm text-red-500'>
      {message}
    </p>
  );
};

interface GatheringCreateFormProps {
  onOpenModal: () => void;
  onChangeGatheringId: Dispatch<SetStateAction<number | undefined>>;
}

const GatheringCreateForm = ({
  onOpenModal,
  onChangeGatheringId,
}: GatheringCreateFormProps) => {
  const gatheringCreateApi = usePostGatheringCreateApi();

  const gatheringCreater = async (requestBody: GatheringCreateRequest) => {
    const { roomId } = await gatheringCreateApi(requestBody);

    onOpenModal();
    onChangeGatheringId(roomId);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    control,
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      thumbnailImage: new File([], ''),
      roomTitle: '',
      description: '',
      isArrowedSameGender: false,
      headcount: [1, 8],
      time: '',
      startTime: '',
      age: [20, 30],
      subwayLine: '',
      subwayStation: '',
      place: '',
      categories: [],
    },
  });

  const requiredAndLengthRegister = ({
    required,
    name,
    minLength,
    maxLength,
  }: RequiredAndLengthRegister) => {
    return register(name, {
      ...(required && { required: REQUIRE_MESSAGE }),
      ...(minLength && {
        minLength: {
          value: minLength,
          message: `${minLength}자 이상 입력해야 합니다.`,
        },
      }),
      ...(maxLength && {
        maxLength: {
          value: maxLength,
          message: `${maxLength}자까지 입력할 수 있습니다.`,
        },
      }),
    });
  };

  const roomTitleRegister: RequiredAndLengthRegister = {
    required: true,
    name: 'roomTitle',
    maxLength: 20,
    minLength: 2,
  };

  const descriptionRegister: RequiredAndLengthRegister = {
    required: true,
    name: 'description',
    maxLength: 500,
    minLength: 2,
  };

  const timeRegister: RequiredAndLengthRegister = {
    required: true,
    name: 'time',
  };

  const startTimeRegister: RequiredAndLengthRegister = {
    required: false,
    name: 'startTime',
  };

  const subwayStationRegister: RequiredAndLengthRegister = {
    required: true,
    name: 'subwayStation',
  };

  const placeRegister: RequiredAndLengthRegister = {
    required: false,
    name: 'place',
  };

  const onSubmit: SubmitForm = (data: FormValues) => {
    const {
      thumbnailImage: imageFile,
      isArrowedSameGender,
      headcount: [minParticipants, maxParticipants],
      time,
      age: [minAge, maxAge],
      ...restGathering
    } = data;

    const gathering = {
      isAllowedOppositeGender: !isArrowedSameGender,
      minParticipants,
      maxParticipants,
      day: time.split(' ')[0],
      time: time.split(' ')[1],
      minAge,
      maxAge,
      ...restGathering,
    };

    gatheringCreater({
      imageFile,
      gathering,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex grow flex-col overflow-y-hidden'
    >
      <div className='overflow-y-auto'>
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
            currentLength={watch('roomTitle')?.length}
          >
            <TextInput
              variant={errors.roomTitle ? 'error' : 'default'}
              maxLength={50}
              {...requiredAndLengthRegister(roomTitleRegister)}
            />
            <ErrorMessage message={errors.roomTitle?.message} />
          </Label>
          <Label
            title='모임 설명'
            isRequired
            maxLength={500}
            currentLength={watch('description')?.length}
          >
            <Textarea
              variant={errors.description ? 'error' : 'default'}
              {...requiredAndLengthRegister(descriptionRegister)}
            />
            <ErrorMessage message={errors.description?.message} />
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
              options={TIMES}
              placeholder='시간대 선택'
              {...requiredAndLengthRegister(timeRegister)}
            />
            <ErrorMessage message={errors.time?.message} />
          </Label>
          <Label title='시작 시각'>
            <TextInput {...requiredAndLengthRegister(startTimeRegister)} />
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
                    includedValue={23}
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
            <Alert>{AGE_ALERT_MESSAGE}</Alert>
          </Label>
          <Label title='지역 (가까운 지하철역)' isRequired>
            <TextInput
              variant={errors.subwayStation ? 'error' : 'default'}
              {...requiredAndLengthRegister(subwayStationRegister)}
            />
            <ErrorMessage message={errors.subwayStation?.message} />
          </Label>
          <Label title='장소'>
            <TextInput {...requiredAndLengthRegister(placeRegister)} />
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
                    onChange={onChange}
                  />
                );
              }}
            />
          </Label>
        </section>
      </div>
      <div className='border-t border-gray-accent7 p-4'>
        {isValid ? (
          <Button variant='primary'>모임 생성하기</Button>
        ) : (
          <Button variant='inactive'>모임 생성하기</Button>
        )}
      </div>
    </form>
  );
};

export default GatheringCreateForm;

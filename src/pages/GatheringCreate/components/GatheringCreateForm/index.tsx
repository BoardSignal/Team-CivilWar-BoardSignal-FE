import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { array, boolean, mixed, number, object, string } from 'yup';

import { useGetLoggedInUserApi } from '@/apis/getLoggedInUser';
import { usePostGatheringCreateApi } from '@/apis/postGatheringCreate';
import type { GatheringCreateRequest } from '@/apis/postGatheringCreate';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import FormErrorMessage from '@/components/FormErrorMessage';
import ImageUpload from '@/components/ImageUpload';
import Label from '@/components/Label';
import MultipleSelect from '@/components/MultipleSelect';
import Range from '@/components/Range';
import Select from '@/components/Select';
import Textarea from '@/components/TextArea';
import TextInput from '@/components/TextInput';
import Alert from '@/components/alert';
import { BOARDGAME_CATEGORIES } from '@/constants/boardgameCategories';
import { TIMES } from '@/constants/times';
import { showErrorToast } from '@/utils/showToast';

interface GatheringCreateFormValues {
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

const REQUIRE_MESSAGE = '필수 입력 사항입니다.';
const AGE_ALERT_MESSAGE =
  '나이대는 본인 나이를 포함한 범위만 설정할 수 있어요.';

const gatheringCreateSchema = object().shape({
  thumbnailImage: mixed<File>().required(),
  roomTitle: string()
    .required(REQUIRE_MESSAGE)
    .trim()
    .min(2, '앞뒤 공백 제외 2자 이상 입력해야 해요.')
    .max(50, '50까지 입력할 수 있어요.'),
  description: string()
    .required(REQUIRE_MESSAGE)
    .trim()
    .min(2, '앞뒤 공백 제외 2자 이상 입력해야 해요.')
    .max(500, '500자까지 입력할 수 있어요.'),
  isArrowedSameGender: boolean().required(),
  headcount: array(number().required()).required().length(2),
  time: string().required(REQUIRE_MESSAGE),
  startTime: string().defined(),
  age: array(number().required()).required().length(2),
  subwayLine: string().defined(),
  subwayStation: string().required(REQUIRE_MESSAGE),
  place: string().defined(),
  categories: array(string().defined()).required(),
});

interface GatheringCreateFormProps {
  onCreate: (gatheringId: number) => void;
}

const GatheringCreateForm = ({ onCreate }: GatheringCreateFormProps) => {
  const currentUser = useGetLoggedInUserApi();

  const gatheringCreateApi = usePostGatheringCreateApi();
  const createGathering = async (request: GatheringCreateRequest) => {
    const { data, isBadRequest } = await gatheringCreateApi(request);

    if (isBadRequest) {
      return showErrorToast(data.message);
    }

    onCreate(data.roomId);
  };

  const gatheringCreateDefaultValue = {
    thumbnailImage: new File([], ''),
    roomTitle: '',
    description: '',
    isArrowedSameGender: false,
    headcount: [1, 8],
    time: '',
    startTime: '',
    age: [
      Math.floor(currentUser.age / 10) * 10,
      Math.ceil(currentUser.age / 10) * 10,
    ],
    subwayLine: '',
    subwayStation: '',
    place: '',
    categories: [],
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    control,
  } = useForm({
    mode: 'all',
    defaultValues: gatheringCreateDefaultValue,
    resolver: yupResolver(gatheringCreateSchema),
  });

  const onSubmitGathering = (data: GatheringCreateFormValues) => {
    const {
      thumbnailImage: imageFile,
      isArrowedSameGender,
      headcount: [minParticipants, maxParticipants],
      time,
      age: [minAge, maxAge],
      categories,
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
      categories:
        categories.length === 0 ? [...BOARDGAME_CATEGORIES] : categories,
      ...restGathering,
    };

    createGathering({
      imageFile,
      gathering,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitGathering)}
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
              {...register('roomTitle')}
            />
            <FormErrorMessage message={errors.roomTitle?.message} />
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
              options={TIMES}
              placeholder='시간대 선택'
              {...register('time')}
            />
            <FormErrorMessage message={errors.time?.message} />
          </Label>
          <Label title='시작 시각'>
            <TextInput {...register('startTime')} />
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
                    includedValue={currentUser.age}
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
              {...register('subwayStation')}
            />
            <FormErrorMessage message={errors.subwayStation?.message} />
          </Label>
          <Label title='장소'>
            <TextInput {...register('place')} />
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
        <Button variant={isValid ? 'primary' : 'inactive'}>
          모임 생성하기
        </Button>
      </div>
    </form>
  );
};

export default GatheringCreateForm;

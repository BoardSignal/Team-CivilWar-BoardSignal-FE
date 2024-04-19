import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { useGetLoggedInUserApi } from '@/apis/loggedInUser';
import Button from '@/components/Button';
import ChipSelect from '@/components/ChipSelect';
import FormErrorMessage from '@/components/FormErrorMessage';
import ImageUpload from '@/components/ImageUpload';
import Label from '@/components/Label';
import SubwaySelect from '@/components/SubwaySelect';
import TextInput from '@/components/TextInput';
import { BOARDGAME_CATEGORIES } from '@/constants/options';

import { profileEditSchema } from './formSchema';
import profileEditRequestMapper, {
  ProfileEditFormValue,
} from './profileEditMapper';
import useProfileEdit from './useProfileEdit';

export type OnProfileEdit = (userId: number) => void;

interface ProfileEditFormProps {
  onProfileEdit: OnProfileEdit;
}

const ProfileEditForm = ({ onProfileEdit }: ProfileEditFormProps) => {
  const editProfile = useProfileEdit(onProfileEdit);
  const { birth, gender, nickname, subwayStation, subwayLine, categories } =
    useGetLoggedInUserApi();

  const profileEditDefaultValue = {
    profileImageUrl: new File([], ''),
    nickname,
    station: `${subwayStation} (${subwayLine})`,
    categories,
    birth: `${birth}`,
    gender,
  };

  const profileEditFormOptions = {
    mode: 'all',
    resolver: yupResolver(profileEditSchema),
    defaultValues: profileEditDefaultValue,
  } as const;

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    control,
    watch,
  } = useForm(profileEditFormOptions);

  const onSubmitProfileEdit = (data: ProfileEditFormValue) => {
    const request = profileEditRequestMapper({
      ...data,
      birth: `${birth}`,
      gender,
    });
    editProfile(request);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitProfileEdit)}
      className='flex grow flex-col overflow-y-hidden'
    >
      <div className='grow overflow-y-auto overflow-x-hidden'>
        <Controller
          name='profileImageUrl'
          control={control}
          render={({ field }) => {
            const { onChange } = field;

            return <ImageUpload variant='circle' onChange={onChange} />;
          }}
        />
        <section className='flex flex-col gap-4 p-4'>
          <div className='flex gap-4'>
            <Label title='출생년도'>
              <TextInput
                disabled={true}
                value={birth}
                className='text-gray-accent3'
              />
            </Label>
            <Label title='성별'>
              <TextInput
                disabled={true}
                value={gender}
                className='text-gray-accent3'
              />
            </Label>
          </div>
          <Label
            maxLength={10}
            title='닉네임'
            isRequired
            currentLength={watch('nickname')?.length}
          >
            <TextInput
              variant={errors.nickname ? 'error' : 'default'}
              {...register('nickname')}
            />
            <FormErrorMessage message={errors.nickname?.message} />
          </Label>
          <Label title='지역 (가까운 지하철역)'>
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
          <Label title='게임 카테고리'>
            <Controller
              name='categories'
              control={control}
              render={({ field }) => {
                const { value, onChange } = field;

                return (
                  <ChipSelect
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
      <div className='p-4'>
        <Button type='submit' variant={isValid ? 'primary' : 'inactive'}>
          저장
        </Button>
      </div>
    </form>
  );
};

export default ProfileEditForm;

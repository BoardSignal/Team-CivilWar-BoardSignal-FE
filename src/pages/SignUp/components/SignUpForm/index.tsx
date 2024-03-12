import { Controller, useForm } from 'react-hook-form';

import FormErrorMessage from '@/components/FormErrorMessage';
import ImageUpload from '@/components/ImageUpload';
import Label from '@/components/Label';
import MultipleSelect from '@/components/MultipleSelect';
import TextInput from '@/components/TextInput';
import { BOARDGAME_CATEGORIES } from '@/constants/boardgameCategories';

import { signUpFormOptions } from './formSchema';

// export type OnSignUp = (gatheringId: number) => void;

// interface SignUpFormProps {
//   onCreate: OnSignUp;
// }

const SignUpForm = () => {
  const {
    register,
    //handleSubmit,
    formState: { errors },
    control,
    //setValue,
  } = useForm(signUpFormOptions);

  return (
    <form className='flex grow flex-col overflow-y-hidden'>
      <div className='overflow-y-auto'>
        <Controller
          name='profileImageUrl'
          control={control}
          render={({ field }) => {
            const { onChange } = field;

            return <ImageUpload variant='square' onChange={onChange} />;
          }}
        />
        <section className='flex flex-col gap-4 p-4'>
          <Label title='이름'>
            <TextInput disabled={true} />
          </Label>
          <div className='flex gap-4'>
            <Label title='출생년도'>
              <TextInput disabled={true} />
            </Label>
            <Label title='성별'>
              <TextInput disabled={true} />
            </Label>
          </div>
          <Label title='닉네임' isRequired>
            <TextInput
              variant={errors.nickname ? 'error' : 'default'}
              maxLength={50}
              {...register('nickname')}
            />
            <FormErrorMessage message={errors.nickname?.message} />
          </Label>
          <Label title='지역 (가까운 지하철역)' isRequired>
            <TextInput
              variant={errors.subwayStation ? 'error' : 'default'}
              {...register('subwayStation')}
            />
          </Label>
          <FormErrorMessage message={errors.subwayStation?.message} />
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
    </form>
  );
};

export default SignUpForm;

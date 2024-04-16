import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import ChipSelect from '@/components/ChipSelect';
import FormErrorMessage from '@/components/FormErrorMessage';
import ImageUpload from '@/components/ImageUpload';
import Label from '@/components/Label';
import Select from '@/components/Select';
import SubwaySelect from '@/components/SubwaySelect';
import TextInput from '@/components/TextInput';
import {
  AGREE_MARKETING_MESSAGE,
  AGREE_TERMS_MESSAGE,
} from '@/constants/messages/boardSignal';
import { BOARDGAME_CATEGORIES } from '@/constants/options';

import Agreement from './Agreement';
import { registerFormOptions } from './formSchema';
import registerRequestMapper, { RegisterFormValue } from './registerMapper';
import useRegister from './useRegister';

export type OnRegister = () => void;

interface RegisterFormProps {
  onRegister: OnRegister;
}

const BIRTH_YEAR_OPTIONS = Array.from({ length: 30 }, (_, idx) =>
  String(idx + 1980),
);
const BIRTH_YEAR_PLACEHOLDER = '출생년도선택';
const GENDER_OPTIONS = ['남성', '여성'];
const GENDER_PLACEHOLDER = '성별 선택';

const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm(registerFormOptions);

  const registerUser = useRegister(onRegister);
  const onSubmitResister = (data: RegisterFormValue) => {
    const request = registerRequestMapper(data);
    registerUser(request);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitResister)}
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
          <div className='flex w-full gap-8'>
            <div className='w-1/2'>
              <Label title='출생년도' isRequired>
                <Select
                  options={BIRTH_YEAR_OPTIONS}
                  placeholder={BIRTH_YEAR_PLACEHOLDER}
                  variant={errors.birth ? 'error' : 'default'}
                  {...register('birth')}
                />
                <FormErrorMessage message={errors.birth?.message} />
              </Label>
            </div>
            <div className='w-2/5'>
              <Label title='성별' isRequired>
                <Select
                  options={GENDER_OPTIONS}
                  placeholder={GENDER_PLACEHOLDER}
                  variant={errors.gender ? 'error' : 'default'}
                  {...register('gender')}
                />
                <FormErrorMessage message={errors.gender?.message} />
              </Label>
            </div>
          </div>
          <Label
            title='닉네임'
            isRequired
            currentLength={watch('nickname')?.length}
            maxLength={10}
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
                    limit={3}
                  />
                );
              }}
            />
          </Label>
        </section>
      </div>
      <div className='flex flex-col gap-2 border-t border-gray-accent7 p-4'>
        <div>
          <Agreement {...register('isAgreeTerms')}>
            {AGREE_TERMS_MESSAGE}
          </Agreement>
          <Agreement {...register('isAgreeMarketing')}>
            {AGREE_MARKETING_MESSAGE}
          </Agreement>
        </div>
        <Button type='submit' variant={isValid ? 'primary' : 'inactive'}>
          가입하기
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;

import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import FormErrorMessage from '@/components/FormErrorMessage';
import ImageUpload from '@/components/ImageUpload';
import Label from '@/components/Label';
import MultipleSelect from '@/components/MultipleSelect';
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

const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
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

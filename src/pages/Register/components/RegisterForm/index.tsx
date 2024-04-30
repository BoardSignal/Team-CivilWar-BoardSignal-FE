import { useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import { useGetLoggedInUserApi } from '@/apis/loggedInUser';
import Button from '@/components/Button';
import FormErrorMessage from '@/components/FormErrorMessage';
import Icon from '@/components/Icon';
import ImageUpload from '@/components/ImageUpload';
import Label from '@/components/Label';
import MultipleSelect from '@/components/MultipleSelect';
import SubwaySelect from '@/components/SubwaySelect';
import TextInput from '@/components/TextInput';
import {
  AGREE_MARKETING,
  AGREE_MARKETING_MESSAGE,
  AGREE_TERMS,
  AGREE_TERMS_MESSAGE,
} from '@/constants/messages/boardSignal';
import { BOARDGAME_CATEGORIES } from '@/constants/options';

import Agreement from './Agreement';
import AgreementModal from './agreementModal';
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
  const { name, birth, gender } = useGetLoggedInUserApi();
  const onSubmitResister = (data: RegisterFormValue) => {
    const request = registerRequestMapper(data);
    registerUser(request);
  };

  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false);

  const handleOpenTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const handleCloseTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  const handleOpenMarketingModal = () => {
    setIsMarketingModalOpen(true);
  };

  const handleCloseMarketingModal = () => {
    setIsMarketingModalOpen(false);
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
            <TextInput
              disabled={true}
              value={name}
              className='text-gray-accent3'
            />
          </Label>
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
          <Label title='닉네임' isRequired>
            <TextInput
              variant={errors.nickname ? 'error' : 'default'}
              maxLength={50}
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
                  <MultipleSelect
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
            <Icon
              id='arrow-right-line'
              className='ml-8 cursor-pointer'
              onClick={handleOpenTermsModal}
            />
            <AgreementModal
              variant='agreeTerms'
              isOpen={isTermsModalOpen}
              onClose={handleCloseTermsModal}
              title='보드시그널 약관 및 동의사항'
              buttonChildren='확인'
              children={AGREE_TERMS}
            />
          </Agreement>

          <Agreement {...register('isAgreeMarketing')}>
            {AGREE_MARKETING_MESSAGE}
            <Icon
              id='arrow-right-line'
              className='ml-20 cursor-pointer'
              onClick={handleOpenMarketingModal}
            />
            <AgreementModal
              variant='agreeMarketing'
              isOpen={isMarketingModalOpen}
              onClose={handleCloseMarketingModal}
              title='마케팅 정보 수신 동의사항'
              buttonChildren='확인'
              children={AGREE_MARKETING}
            />
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

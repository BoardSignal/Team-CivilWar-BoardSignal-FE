import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useGetLoggedInUserApi } from '@/apis/loggedInUser';
import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import { IS_SIGN_UP_USER_MESSAGE } from '@/constants/messages/error';
import { SUCCESS_REGISTER_MODAL_MESSAGE } from '@/constants/messages/modal';
import { showErrorToast } from '@/utils/showToast';

import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isJoined } = useGetLoggedInUserApi();

  useEffect(() => {
    if (isJoined) {
      showErrorToast(IS_SIGN_UP_USER_MESSAGE);
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/', { replace: true });
  };

  return (
    <div className='flex h-full flex-col'>
      <Modal
        variant='primary'
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_REGISTER_MODAL_MESSAGE}
      </Modal>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
      </TabBar.Container>
      <RegisterForm onRegister={handleOpenModal} />
    </div>
  );
};

export default RegisterPage;

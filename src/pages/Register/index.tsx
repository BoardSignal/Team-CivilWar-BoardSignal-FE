import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import { SUCCESS_REGISTER_MODAL_MESSAGE } from '@/constants/messages/modal';

import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/');
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

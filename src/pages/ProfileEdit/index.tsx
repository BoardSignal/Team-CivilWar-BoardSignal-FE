import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import { SUCCESS_PROFILE_EDIT_MODAL_MESSAGE } from '@/constants/messages/modal';

import ProfileEditForm from './components/ProfileEditForm';

const ProfileEdit = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState<number | undefined>(undefined);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/users/${userId}`, { replace: true });
  };

  const handleProfileEdit = (userId: number) => {
    handleOpenModal();
    setUserId(userId);
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
        {SUCCESS_PROFILE_EDIT_MODAL_MESSAGE}
      </Modal>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
      </TabBar.Container>
      <ProfileEditForm onProfileEdit={handleProfileEdit} />
    </div>
  );
};

export default ProfileEdit;

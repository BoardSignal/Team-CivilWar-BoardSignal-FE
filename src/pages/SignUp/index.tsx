//import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';

//import { SUCCESS_CREATE_TIP } from '@/constants/messages/modal';
//import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';
import Agreement from './components/Agreement';
import SignUpForm from './components/SignUpForm';

const SignUp = () => {
  //   const navigate = useNavigate();

  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const handleOpenModal = () => {
  //     setIsModalOpen(true);
  //   };

  //   const handleCloseModal = () => {
  //     setIsModalOpen(false);
  //     navigate(`${GATHERINGS_PAGE_URL}`);
  //   };

  return (
    <div>
      {/* <Modal
        variant='primary'
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_CREATE_TIP}
      </Modal> */}
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
      </TabBar.Container>
      <SignUpForm />
      <Agreement />
    </div>
  );
};

export default SignUp;

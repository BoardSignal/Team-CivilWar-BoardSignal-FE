import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import GatheringListItem from '@/components/GatheringList/GatheringListItem';
import Modal from '@/components/Modal';
import TabBar from '@/components/TabBar';
import { SUCCESS_RIVIEW_MODAL_MESSAGE } from '@/constants/messages/modal';

import ReviewForm from './components/ReviewForm';

export interface Gathering {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  station: string;
  time: string;
  minAge: number;
  maxAge: number;
  allowedGender: string;
  minParticipants: number;
  maxParticipants: number;
  categories: string[];
  headCount: number;
  createdAt: string;
}

export interface ParticipantsInfos {
  userId: number;
  nickname: string;
  ageGroup: string;
  profileImageUrl?: string;
  isLeader: boolean;
  signalTemperature: number;
}
interface GatheringListProps {
  gatherings: Gathering[];
  participantsInfos: ParticipantsInfos[];
}

const ReviewCreate = ({
  gatherings,
  participantsInfos,
}: GatheringListProps) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState<number>(0);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/rooms/my/end-games');
  };

  const handleReviewCreate = (userId: number) => {
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
        {SUCCESS_RIVIEW_MODAL_MESSAGE}
      </Modal>
      <TabBar.Container>
        <TabBar.Left>
          <TabBar.GoBackButton />
        </TabBar.Left>
      </TabBar.Container>
      {gatherings.map(gathering => (
        <GatheringListItem key={gathering.id} gathering={gathering} />
      ))}
      <ReviewForm
        participantsInfos={participantsInfos || []}
        onReviewCreate={handleReviewCreate}
        userId={userId}
      />
    </div>
  );
};

export default ReviewCreate;

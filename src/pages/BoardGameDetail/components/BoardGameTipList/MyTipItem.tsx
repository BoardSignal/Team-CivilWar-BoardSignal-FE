import { useState } from 'react';

import { useParams } from 'react-router-dom';

import type { Tip } from '@/apis/boardGameDetail';
import Chip from '@/components/Chip';
import Icon from '@/components/Icon';
import Modal from '@/components/Modal';
import { DELETE_TIP_MODAL_MESSAGE } from '@/constants/messages/modal';

import { useDeleteBoardGameTip } from '../../hooks/useDeleteBoardGameTip';

const DEFAULT_PROFILE_IMAGE_URL = 'https://picsum.photos/200/200';

const MyTipItem = ({
  tip,
  onOpenModal,
}: {
  tip: Tip;
  onOpenModal: () => void;
  onCloseModal: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { boardGameId } = useParams() as { boardGameId: string };
  const { nickname, profileImageUrl, createdAt, content, likeCount, tipId } =
    tip;

  const deleteBoardGameTip = useDeleteBoardGameTip(
    tipId,
    boardGameId,
    onOpenModal,
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    deleteBoardGameTip();
  };

  const handleDeleteModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        variant='danger'
        isOpen={isModalOpen}
        onClose={handleDeleteModal}
        onDelete={handleCloseModal}
        title='안내'
        buttonChildren='확인'
      >
        {DELETE_TIP_MODAL_MESSAGE}
      </Modal>
      <div className='flex gap-2 border-b border-gray-accent7 p-4'>
        <img
          src={profileImageUrl || DEFAULT_PROFILE_IMAGE_URL}
          className='h-10 w-10 rounded-full object-cover'
        />
        <div className='flex w-full flex-col gap-2'>
          <span className='flex items-center justify-between gap-1'>
            <Chip variant='fill'>내 공략</Chip>
            <span className='grow text-sm font-bold text-gray-accent1'>
              {nickname}
            </span>
            <span className='text-[10px] text-gray-accent3'>{createdAt}</span>
          </span>
          <p className='text-gray-accent1'>{content}</p>
          <div className='flex items-center gap-1'>
            <Icon id='thumb-up-line' size={16} className='text-gray-accent3' />
            <span className='grow text-xs text-gray-accent1'>{likeCount}</span>
            <Icon
              id='delete-bin-line'
              className='cursor-pointer text-gray-accent3'
              onClick={handleOpenModal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTipItem;

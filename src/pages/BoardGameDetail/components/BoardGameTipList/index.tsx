import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import type { Tip } from '@/apis/boardGameDetail';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Modal from '@/components/Modal';
import { SUCCESS_DELETE_TIP } from '@/constants/messages/modal';
import { BOARD_GAMES_TIP_CREATE_PAGE_URL } from '@/constants/pageRoutes';
import { cn } from '@/utils/cn';

import MyTipItem from './MyTipItem';
import TipIListItem from './TipItem';

interface BoardGameTipsProps {
  tips: Tip[];
  name: string;
  boardGameId: string;
  myTip: Tip | null;
}

interface TipCreateButtonProps {
  boardGameId: string;
  name: string;
}

const TipCreateButton = ({ boardGameId, name }: TipCreateButtonProps) => {
  const navigate = useNavigate();

  const handleCreateTip = () => {
    navigate(`${BOARD_GAMES_TIP_CREATE_PAGE_URL}/${boardGameId}/${name}`);
  };

  return (
    <Button
      className='flex w-fit items-center gap-0.5 rounded-3xl bg-primary p-3 pl-2 text-white'
      onClick={handleCreateTip}
    >
      <Icon id='add-line' size={16} />
      <span className='text-xs font-bold'>작성하기</span>
    </Button>
  );
};

const BoardGameTipList = ({
  tips,
  name,
  boardGameId,
  myTip,
}: BoardGameTipsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal
        variant='primary'
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title='안내'
        buttonChildren='확인'
      >
        {SUCCESS_DELETE_TIP}
      </Modal>
      <div
        className={cn(
          'flex items-center justify-between p-4',
          myTip && 'flex-col',
        )}
      >
        <div className='mr-auto font-bold'>공략</div>
        {myTip ? (
          <Alert>게임 당 한개의 공략을 작성할 수 있어요.</Alert>
        ) : (
          <TipCreateButton boardGameId={boardGameId} name={name} />
        )}
      </div>
      {myTip && (
        <MyTipItem
          tip={myTip}
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
        />
      )}
      {tips.map(tip => (
        <TipIListItem tip={tip} key={tip.tipId} />
      ))}
    </>
  );
};

export default BoardGameTipList;

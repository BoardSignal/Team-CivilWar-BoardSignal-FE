import { GatheringDetailResponse } from '@/apis/gatheringDetail';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Modal from '@/components/Modal';
import { BOARD_SIGNAL_HOST } from '@/constants/boardSignal';
import { LINK_COPY_SUCCESS_MESSAGE } from '@/constants/messages/boardSignal';
import { DEFAULT_ERROR_MESSAGE } from '@/constants/messages/error';
import { GATHERINGS_PAGE_URL } from '@/constants/pageRoutes';
import { showErrorToast, showSuccessToast } from '@/utils/showToast';

const KAKAO_SHARING_BUTTON_IMAGE =
  'https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png';

interface SharingModalProp {
  isOpen: boolean;
  onClose: () => void;
  gathering: GatheringDetailResponse;
}

const SharingModal = ({ isOpen, onClose, gathering }: SharingModalProp) => {
  const { roomId: id, title, description, imageUrl } = gathering;

  const handleClickKakaoSharingButton = () => {
    const path = `gatherings/${id}/0`;

    window.Kakao.Share.sendCustom({
      templateId: 107258,
      templateArgs: {
        thumbnail_image: imageUrl,
        title,
        description,
        path,
      },
    });
  };

  const handleClickLinkButton = () => {
    const url = `${BOARD_SIGNAL_HOST}${GATHERINGS_PAGE_URL}/${id}/0`;

    navigator.clipboard
      .writeText(url)
      .then(() => showSuccessToast(LINK_COPY_SUCCESS_MESSAGE))
      .catch(() => showErrorToast(DEFAULT_ERROR_MESSAGE));
  };

  return (
    <Modal
      variant='primary'
      isOpen={isOpen}
      onClose={onClose}
      title='모임 공유'
      buttonChildren='닫기'
    >
      <div className='flex items-center justify-center gap-6 p-1'>
        <Button onClick={handleClickKakaoSharingButton} className='h-fit w-fit'>
          <img
            src={KAKAO_SHARING_BUTTON_IMAGE}
            alt='카카오톡 공유하기 버튼'
            className='size-12'
          />
        </Button>
        <Button className='h-fit w-fit' onClick={handleClickLinkButton}>
          <Icon id='link' size={48} />
        </Button>
      </div>
    </Modal>
  );
};

export default SharingModal;

import { useState } from 'react';

import TextInputWithIcon from '../TextInputWithIcon';
import SubwayListModal from './SubwayListModal';

interface SubwaySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const SubwaySelect = ({ value, onChange }: SubwaySelectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubwaySelect = (locationName: string) => {
    setIsModalOpen(false);
    onChange(locationName);
  };

  return (
    <>
      <TextInputWithIcon
        iconId='subway-fill'
        readOnly
        value={value}
        onClick={openModal}
      />
      {isModalOpen && (
        <SubwayListModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSelect={handleSubwaySelect}
        />
      )}
    </>
  );
};

export default SubwaySelect;

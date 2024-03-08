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
        iconId='map-pin-fill'
        value={value}
        onClick={openModal}
      />
      {isModalOpen && (
        <SubwayListModal onClose={closeModal} onSelect={handleSubwaySelect} />
      )}
    </>
  );
};

export default SubwaySelect;

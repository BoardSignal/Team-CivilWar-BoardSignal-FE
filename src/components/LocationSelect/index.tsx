import { useState } from 'react';

import TextInputWithIcon from '../TextInputWithIcon';
import LocationListModal from './LocationListModal';

interface LocationSelectProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * 장소를 검색해서 선택할 수 있는 Select에요.
 *
 * 카카오맵 API를 활용해서 검색 결과 목록을 제공해요.
 */
const LocationSelect = ({ value, onChange }: LocationSelectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLocationSelect = (locationName: string) => {
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
        <LocationListModal
          onClose={closeModal}
          onSelect={handleLocationSelect}
        />
      )}
    </>
  );
};

export default LocationSelect;

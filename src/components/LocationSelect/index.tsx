import { Suspense, useState } from 'react';

import TextInput from '../TextInput';
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
      {/* 모임 확정 페이지 PR의 TextInputWithIcon 병합 시 사용할 예정이에요. */}
      <TextInput value={value} onClick={openModal} />
      {isModalOpen && (
        // TODO: Spinner 병합 시 사용할 예정이에요.
        <Suspense fallback={null}>
          <LocationListModal
            onClose={closeModal}
            onSelect={handleLocationSelect}
          />
        </Suspense>
      )}
    </>
  );
};

export default LocationSelect;

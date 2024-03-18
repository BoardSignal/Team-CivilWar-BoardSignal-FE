import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import type { Option } from '.';
import SubwayListModal from '../SubwaySelect/SubwayListModal';
import OptionFilterButton from './OptionFilterButton';

const OptionSubwaySelect = ({ option }: { option: Option }) => {
  const { queryStringKey } = option;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubwaySelect = (locationName: string) => {
    searchParams.delete(queryStringKey);
    setIsModalOpen(false);
    searchParams.append(queryStringKey, locationName.split(' ')[0]);
    setSearchParams(searchParams);
  };

  return (
    <>
      <OptionFilterButton option={option} onClick={openModal} />
      {isModalOpen && (
        <SubwayListModal onClose={closeModal} onSelect={handleSubwaySelect} />
      )}
    </>
  );
};

export default OptionSubwaySelect;

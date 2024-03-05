import { LocationItem } from '@/apis/types/KakaoMapSearch';

import Button from '../Button';

interface LocationListItemProps {
  onClick: (locationName: string) => void;
  location: LocationItem;
}

const LocationListItem = ({
  onClick,
  location: { name, type, phoneNumber, newFormatAddress, oldFormatAddress },
}: LocationListItemProps) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <Button
      onClick={handleClick}
      className='flex h-fit flex-col items-start gap-1 border-b border-gray-accent7 px-4 py-2'
    >
      <div className='flex items-center gap-1'>
        <span className='font-bold text-gray-accent1'>{name}</span>
        <span className='text-sm text-gray-accent3'>{type}</span>
      </div>
      <span className='text-sm text-gray-accent2'>{newFormatAddress}</span>
      <span className='text-sm text-gray-accent2'>{oldFormatAddress}</span>
      <span className='text-sm text-primary'>{phoneNumber}</span>
    </Button>
  );
};

export default LocationListItem;

import InfiniteScrollAutoFetcher from '../InfiniteScrollAutoFetcher';
import LocationListItem from './LocationListItem';
import useKakaoMapSearchApi from './useKakaoMapSearchApi';

interface LocationListProps {
  searchWord: string;
  onSelect: (value: string) => void;
}

const LocationList = ({ onSelect, searchWord }: LocationListProps) => {
  const { locations, totalCount, hasNextPage, fetchStatus, fetchNextPage } =
    useKakaoMapSearchApi(searchWord);

  return (
    <InfiniteScrollAutoFetcher
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      fetchStatus={fetchStatus}
    >
      <div className='px-4 pb-2 text-gray-accent2'>
        검색 결과 {totalCount}개
      </div>
      {locations.map(location => (
        <LocationListItem
          key={location.id}
          location={location}
          onClick={onSelect}
        />
      ))}
    </InfiniteScrollAutoFetcher>
  );
};

export default LocationList;

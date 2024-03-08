import Button from '@/components/Button';

interface SubwayStationListProps {
  onSelect: (stationName: string) => void;
  stations: string[];
}

const SubwayStationList = ({ onSelect, stations }: SubwayStationListProps) => {
  return (
    <div className='scroll-none h-full grow overflow-y-auto'>
      {stations.map(name => {
        const handleClick = () => {
          onSelect(name);
        };

        return (
          <Button
            key={name}
            onClick={handleClick}
            className='flex h-fit flex-col items-start gap-1 border-b border-gray-accent7 px-4 py-2'
          >
            <div className='rounded-full px-2 py-1 text-sm text-gray-accent1'>
              {name}
            </div>
          </Button>
        );
      })}
    </div>
  );
};

export default SubwayStationList;

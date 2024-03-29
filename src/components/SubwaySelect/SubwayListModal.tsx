import Button from '@/components/Button';
import Icon from '@/components/Icon';
import LayoutRootPortal from '@/components/Layout/LayoutRootPortal';
import useAutoCloseOnGoBack from '@/hooks/useAutoCloseModal';

import StateList from './StateList';
import SubwayLineList from './SubwayLineList';
import SubwayStationList from './SubwayStationList';
import useSubwaySelect from './useSubwaySelect';

interface SubwayListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
}

/**
 * 지하철을 선택할 때 사용되는 목록을 띄우는 모달이에요.
 *
 * 목록을 길게 표시할 수 있도록 전체 화면으로 만들었어요.
 */
const SubwayListModal = ({
  isOpen,
  onClose,
  onSelect,
}: SubwayListModalProps) => {
  useAutoCloseOnGoBack(isOpen, onClose);

  const {
    states,
    selectedState,
    linesOfSelectedState,
    selectedLine,
    stationsOfSelectedLine,
    handleStateSelect,
    handleLineSelect,
    handleStationSelect,
  } = useSubwaySelect(onSelect);

  return (
    <LayoutRootPortal>
      <div className='absolute left-0 top-0 z-10 flex h-full w-full flex-col bg-gray-bg-base'>
        <div className='flex items-center gap-2 border-b border-gray-accent7 px-4 py-2'>
          <Button onClick={onClose} className='h-fit w-fit'>
            <Icon
              size={32}
              id='arrow-left-line'
              className='text-gray-accent2'
            />
          </Button>
        </div>
        <StateList
          onSelect={handleStateSelect}
          states={states}
          selectedState={selectedState}
        />
        <div className='scroll-none flex grow overflow-y-auto overflow-x-hidden'>
          <SubwayLineList
            onSelect={handleLineSelect}
            selectedLine={selectedLine}
            lines={linesOfSelectedState}
          />
          <SubwayStationList
            onSelect={handleStationSelect}
            stations={stationsOfSelectedLine}
          />
        </div>
      </div>
    </LayoutRootPortal>
  );
};

export default SubwayListModal;

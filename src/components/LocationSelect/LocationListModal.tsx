import { KeyboardEvent, Suspense, useState } from 'react';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import LayoutRootPortal from '@/components/Layout/LayoutRootPortal';
import TextInput from '@/components/TextInput';
import useAutoCloseOnGoBack from '@/hooks/useAutoCloseModal.ts';

import ApiErrorBoundary from '../ErrorBoundary/ApiErrorBoundary.tsx';
import SpinnerFullScreen from '../Spinner/SpinnerFullScreen.tsx';
import LocationList from './LocationList.tsx';

interface LocationListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
}

/**
 * 장소를 선택할 때 사용되는 목록을 띄우는 모달이에요.
 *
 * 목록을 길게 표시할 수 있도록 전체 화면으로 만들었어요.
 */
const LocationListModal = ({
  isOpen,
  onClose,
  onSelect,
}: LocationListModalProps) => {
  useAutoCloseOnGoBack(isOpen, onClose);
  const [searchWord, setSearchWord] = useState('');

  const updateSearchWord = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchWord(e.currentTarget.value);
    }
  };

  return (
    <LayoutRootPortal>
      <div className='absolute left-0 top-0 z-10 flex h-full w-full flex-col gap-2 bg-gray-bg-base'>
        <div className='flex items-center gap-2 border-b border-gray-accent7 px-4 py-2'>
          <Button onClick={onClose} className='h-fit w-fit'>
            <Icon
              size={32}
              id='arrow-left-line'
              className='text-gray-accent2'
            />
          </Button>
          <TextInput
            autoFocus
            onKeyDown={updateSearchWord}
            placeholder='장소를 검색하세요...'
          />
        </div>
        <div className='grow overflow-y-auto overflow-x-hidden'>
          {searchWord && (
            <ApiErrorBoundary>
              <Suspense fallback={<SpinnerFullScreen />}>
                <LocationList onSelect={onSelect} searchWord={searchWord} />
              </Suspense>
            </ApiErrorBoundary>
          )}
        </div>
      </div>
    </LayoutRootPortal>
  );
};

export default LocationListModal;

import { SubwayStates } from '@/assets/subway-stations';
import { cn } from '@/utils/cn';

import Button from '../Button';

interface StateListProps {
  onSelect: (state: SubwayStates) => void;
  states: SubwayStates[];
  selectedState: SubwayStates;
}

const StateList = ({ onSelect, states, selectedState }: StateListProps) => (
  <div className='scroll-none flex shrink-0 gap-2 overflow-x-auto border-b border-gray-accent7 p-4'>
    {states.map(state => (
      <Button
        key={state}
        onClick={() => {
          onSelect(state);
        }}
        className={cn(
          'w-fit shrink-0 rounded-full bg-gray-accent7 px-4 py-2 text-sm text-gray-accent3',
          state === selectedState && 'bg-primary-lighter text-primary',
        )}
      >
        {state}
      </Button>
    ))}
  </div>
);

export default StateList;

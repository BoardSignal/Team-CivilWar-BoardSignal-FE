import { useState } from 'react';

import subwayStations, {
  type SubwayLines,
  type SubwayStates,
} from '@/assets/subway-stations';

// 모든 지역에 1호선이 있어요.
const DEFAULT_SELECTED_LINE = '1호선';

type OnSelect = (value: string) => void;

const useSubwaySelect = (onSelect: OnSelect) => {
  const [selectedState, setSelectedState] = useState<SubwayStates>('수도권');
  const [selectedLine, setSelectedLine] = useState<SubwayLines>(
    DEFAULT_SELECTED_LINE,
  );

  const { states, lines, data } = subwayStations;
  const linesOfSelectedState = lines[selectedState];
  const stationsOfSelectedLine = data.filter(
    ({ category, lineName }) =>
      category === selectedState && lineName === selectedLine,
  )[0].stations;

  const handleStateSelect = (state: SubwayStates) => {
    setSelectedState(state);
    setSelectedLine(DEFAULT_SELECTED_LINE);
  };

  const handleLineSelect = (line: SubwayLines) => {
    setSelectedLine(line);
  };

  const handleStationSelect = (station: string) => {
    const state = selectedState === '수도권' ? '' : `${selectedState} `; // 수도권이 아닌 경우 지역명도 함께 표시해요.
    const concatenated = `${station}역 (${state}${selectedLine})`;
    onSelect(concatenated);
  };

  return {
    states,
    selectedState,
    linesOfSelectedState,
    selectedLine,
    stationsOfSelectedLine,
    handleStateSelect,
    handleLineSelect,
    handleStationSelect,
  };
};

export default useSubwaySelect;

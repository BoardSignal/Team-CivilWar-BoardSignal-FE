import { useState } from 'react';

import subwayStations, { SubwayStates } from '@/assets/subway-stations';

type OnSelect = (value: string) => void;

const useSubwaySelect = (onSelect: OnSelect) => {
  // 무조건 선택된 상태가 되도록 해요.
  const [selectedState, setSelectedState] = useState<SubwayStates>('수도권');
  // 모든 지역에 1호선이 있어요.
  const [selectedLine, setSelectedLine] = useState('1호선');

  const { states, lines, data } = subwayStations;
  const linesOfSelectedState = lines[selectedState];
  const stationsOfSelectedLine = data.filter(
    ({ category, lineName }) =>
      category === selectedState && lineName === selectedLine,
  )[0].stations;

  const handleStateSelect = (state: SubwayStates) => {
    setSelectedState(state);
  };

  const handleLineSelect = (line: string) => {
    setSelectedLine(line);
  };

  const handleStationSelect = (station: string) => {
    // 수도권이 아닌 경우 지역명도 함께 표시해요.
    const state = selectedState === '수도권' ? '' : `${selectedState} `;
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

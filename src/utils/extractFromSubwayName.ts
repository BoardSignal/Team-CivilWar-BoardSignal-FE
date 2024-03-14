export const extractLineFromSubwayName = (subwayStation: string) => {
  const pattern = /\(([^)]+)\)/;
  const match = subwayStation.match(pattern);
  if (!match) {
    throw new Error('invalid subway station');
  }

  // match는 ["(부산 1호선)", "부산 1호선"] 형태로 반환되므로 match[1]을 반환
  return match[1];
};

export const extractStationFromSubwayName = (subwayStation: string) => {
  return subwayStation.split(' ')[0];
};

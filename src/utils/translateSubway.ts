export const translateSubwayToLine = (subwayStation: string) => {
  const pattern = /\(([^)]+)\)/;
  const match = subwayStation.match(pattern);

  return match ? match[1] : '호선 없음';
};

export const translateSubwayToStation = (subwayStation: string) => {
  return subwayStation.split(' ')[0];
};

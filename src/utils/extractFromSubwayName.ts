export const extractLineFromSubwayName = (subwayStation: string) => {
  const pattern = /\(([^)]+)\)/;
  const match = subwayStation.match(pattern);
  if (!match) {
    throw new Error('invalid subway station');
  }

  return match[1];
};

export const extractStationFromSubwayName = (subwayStation: string) => {
  return subwayStation.split(' ')[0];
};

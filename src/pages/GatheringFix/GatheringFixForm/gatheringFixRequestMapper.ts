import { GatheringFixFormValues } from '.';

const translateSubwayToLine = (subwayStation: string) => {
  const pattern = /\(([^)]+)\)/;
  const match = subwayStation.match(pattern);

  return match ? match[1] : '호선 없음';
};

const translateSubwayToStation = (subwayStation: string) => {
  return subwayStation.split(' ')[0];
};

const translateTimeToDateObject = (time: string, date: string) => {
  const [timePeriod, clockTime] = time.split(' ');
  const [hour, minute] = clockTime.split(':').map(Number);
  const [year, month, day] = date.split('-').map(Number);

  let modifiedHour = hour;
  if (timePeriod === '오후') {
    modifiedHour += 12;
  }
  return new Date(year, month - 1, day, modifiedHour, minute);
};

const gatheringCreateRequestMapper = (data: GatheringFixFormValues) => {
  const { time, date, subwayStation, place } = data;

  const gathering = {
    meetingTime: translateTimeToDateObject(time, date),
    line: translateSubwayToLine(subwayStation),
    station: translateSubwayToStation(subwayStation),
    meetingPlace: place,
  };

  return gathering;
};

export default gatheringCreateRequestMapper;

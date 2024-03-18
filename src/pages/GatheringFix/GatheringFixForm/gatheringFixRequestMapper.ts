import {
  extractLineFromSubwayName,
  extractStationFromSubwayName,
} from '@/utils/extractFromSubwayName';

import { GatheringFixFormValues } from './formSchema';

const convertTimeToDate = (date: string, time: string) => {
  const [timePeriod, clockTime] = time.split(' ');
  const [hour, minute] = clockTime.split(':').map(Number);
  const [year, month, day] = date.split('-').map(Number);

  const modifiedHour = timePeriod === '오후' && hour !== 12 ? hour - 12 : hour;

  return new Date(year, month - 1, day, modifiedHour, minute);
};

const gatheringCreateRequestMapper = (data: GatheringFixFormValues) => {
  const { time, date, subwayStation, place } = data;

  const gathering = {
    meetingTime: convertTimeToDate(date, time),
    line: extractLineFromSubwayName(subwayStation),
    station: extractStationFromSubwayName(subwayStation),
    meetingPlace: place,
  };

  return gathering;
};

export default gatheringCreateRequestMapper;

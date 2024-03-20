import { format, parse } from 'date-fns';

import {
  extractLineFromSubwayName,
  extractStationFromSubwayName,
} from '@/utils/extractFromSubwayName';

import { GatheringFixFormValues } from './formSchema';

const convertTimeToDate = (date: string, time: string) => {
  const [timePeriod, clockTime] = time.split(' ');
  const [hour, minute] = clockTime.split(':').map(Number);
  const [year, month, day] = date.split('-').map(Number);

  const modifyHour = timePeriod === '오후' && hour !== 12 ? hour + 12 : hour;

  const parsedDate = parse(
    `${year}-${month}-${day} ${modifyHour}:${minute}`,
    'yyyy-MM-dd HH:mm',
    new Date(),
  );

  const isoString = format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss");

  return isoString;
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

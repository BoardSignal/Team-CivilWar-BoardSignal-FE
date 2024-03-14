import {
  translateSubwayToLine,
  translateSubwayToStation,
} from '@/utils/translateSubway';

import { GatheringFixFormValues } from './formSchema';

const translateTimeToDateObject = (time: string, date: string) => {
  const [timePeriod, clockTime] = time.split(' ');
  const [hour, minute] = clockTime.split(':').map(Number);
  const [year, month, day] = date.split('-').map(Number);

  const modifiedHour = timePeriod === '오후' ? hour : hour + 12;

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
